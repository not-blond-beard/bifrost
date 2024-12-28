import { useState } from "react";
import { useStageTransactionMutation } from "@/graphql-headless/generated/graphql";
import { getChronoSdk } from "@planetarium/chrono-sdk";
import { Address } from "@planetarium/account";
import type { PolymorphicAction } from "@planetarium/lib9c";
import type { GraphQLFormattedError } from "graphql";

export type SigningProgress = "None" | "Signing" | "Staging" | "Done";
export type SigningError = readonly GraphQLFormattedError[] | Error | null;

interface SigningResult {
  progress: SigningProgress;
  txId: string | null;
  startSigning: (action: PolymorphicAction) => void;
  error: SigningError;
}

export function useSignAndStage(
  signer: string | null
): SigningResult {
  const [progress, setProgress] = useState<SigningProgress>("None");
  const [txId, setTxId] = useState<string | null>(null);
  const [error, setError] = useState<SigningError>(null);

  const [stage] = useStageTransactionMutation();

  const startSigning = (action: PolymorphicAction) => {
    if (signer === null) {
      setError(new Error("Signer is null"));
      return;
    }

    setProgress("Signing");
    const chronoWallet = getChronoSdk();
    if (!chronoWallet) {
      setError(new Error("Chrono SDK is not available"));
      setProgress("None");
      return;
    }

    chronoWallet
      // @ts-ignore
      .sign(Address.fromHex(signer), action)
      .then((tx) => {
        setProgress("Staging");
        return stage({
          variables: {
            tx: tx.toString("hex"),
          }, context: { clientName: 'headless' }

        });
      })
      .then(({ data, errors }) => {
        if (errors && errors.length > 0) {
          setError(errors);
          setProgress("None");
        } else {
          setTxId(data?.stageTransaction || null);
          setProgress("Done");
        }
      })
      .catch((e: Error) => {
        setError(e);
        setProgress("None");
      });
  };

  return {
    progress,
    txId,
    startSigning,
    error,
  };
}
