import { getChronoSdk } from "@planetarium/chrono-sdk";
import { ChronoStatus, useStatusStore, useAuthStore } from "@/store/auth";
import {
	useAccounts,
	useConnect,
	useNetwork,
} from "@planetarium/chrono-sdk/hooks";
import { useEffect, useMemo } from "react";
import { ChronoDownloadLink } from "@/constants/chrono";
import { Planet } from "@/constants/planet";
import { HEIMDALL_GENESIS_HASH, ODIN_GENESIS_HASH } from "@planetarium/lib9c";
import { Buffer } from "buffer";

import RadioGroup from "@/components/RadioGroup";
import RadioButton from "@/components/RadioButton";

function ConnectChrono() {
	const { status: chronoStatus, updateStatus } = useStatusStore();
	const {
		accounts: chronoAccounts,
		currentAccount,
		updateAccounts,
		updateCurrentAccount,
		updatePlanet,
	} = useAuthStore();

	const { connectAsync, isPending } = useConnect();
	const {
		data: accountsData,
		isLoading: accountsLoading,
		isSuccess: accountsSuccess,
	} = useAccounts();
	const {
		data: networksData,
		isLoading: networksLoading,
		isSuccess: networksSuccess,
	} = useNetwork();

	const chronoWallet = useMemo(() => getChronoSdk(), []);

	useEffect(() => {
		if (!chronoWallet) {
			return updateStatus(ChronoStatus.NOT_INSTALLED);
		}

		if (accountsLoading || networksLoading) {
			return updateStatus(ChronoStatus.LOADING);
		}

		if (!accountsSuccess || !networksSuccess) {
			updateStatus(ChronoStatus.NOT_CONNECTED);
			updateAccounts([]);

			return;
		}

		if (accountsData.isConnected) {
			updateStatus(ChronoStatus.CONNECTED);
		} else {
			updateStatus(ChronoStatus.NOT_CONNECTED);
		}
	}, [
		chronoWallet,
		accountsData,
		accountsLoading,
		accountsSuccess,
		networksLoading,
		networksSuccess,
		updateAccounts,
		updateCurrentAccount,
		updateStatus,
	]);

	useEffect(() => {
		if (!accountsData?.isConnected) return;
		if (currentAccount && chronoAccounts) return;

		const addresses = accountsData.accounts.map((address) =>
			address.toString(),
		);

		updateAccounts(addresses);
		updateCurrentAccount(addresses[0]);
	}, [
		accountsData,
		chronoAccounts,
		currentAccount,
		updateAccounts,
		updateCurrentAccount,
	]);

	useEffect(() => {
		if (!networksData?.isConnected || !networksData.network) return;

		const genesisHash = Buffer.from(
			networksData.network.genesisHash,
		).toString();

		switch (genesisHash) {
			case Buffer.from(ODIN_GENESIS_HASH).toString("hex"):
				updatePlanet(Planet.ODIN);
				break;
			case Buffer.from(HEIMDALL_GENESIS_HASH).toString("hex"):
				updatePlanet(Planet.HEIMDALL);
				break;
			default:
				updatePlanet(Planet.NOT_SUPPORTED);
		}
	}, [networksData, updatePlanet]);

	const renderContent = () => {
		switch (chronoStatus) {
			case ChronoStatus.NOT_INSTALLED:
				return (
					<>
						<a
							className="underline"
							href={ChronoDownloadLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							&gt;&gt;&gt; Install Chrono
						</a>
						<p>You cannot access most features until you connect Chrono.</p>
					</>
				);

			case ChronoStatus.LOADING:
				return (
					<>
						<p>Loading...</p>
						<p>
							* If you are installing Chrono for the first time, please create
							an account.
						</p>
					</>
				);

			case ChronoStatus.NOT_CONNECTED:
				return (
					<button
						className="p-4 font-bold"
						onClick={() => connectAsync()}
						disabled={isPending}
					>
						{isPending ? "Connecting..." : "Connect Chrono"}
					</button>
				);

			case ChronoStatus.CONNECTED:
				return (
					<RadioGroup title="Select agent address">
						{chronoAccounts.map((address) => (
							<RadioButton
								label={address}
								onChange={() => {
									updateCurrentAccount(address);
								}}
								key={address}
								value={address}
								checked={currentAccount === address}
							/>
						))}
					</RadioGroup>
				);

			default:
				return null;
		}
	};

	return (
		<>
			{networksData && <p>Current Planet is {networksData.network?.name}</p>}
			{renderContent()}
		</>
	);
}

export default ConnectChrono;
