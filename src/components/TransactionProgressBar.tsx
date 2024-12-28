import { heimdallScanUrl, odinScanUrl, Planet } from "@/constants/planet";
import type { SigningError, SigningProgress } from "@/hooks/useSignAndStage";

interface Props {
	progress: SigningProgress;
	txId: string | null;
	error: SigningError;
	planet: Planet;
}

export default function TransactionProgressBar({
	progress,
	txId,
	error,
	planet,
}: Props) {
	const handleTxClick = () => {
		if (txId && progress === "Done") {
			const scanUrl = planet === Planet.ODIN ? odinScanUrl : heimdallScanUrl;
			window.open(`${scanUrl}/tx/${txId}`);
		}
	};

	const progressMap: Record<
		SigningProgress,
		{ percent: number; label: string }
	> = {
		None: { percent: 0, label: "" },
		Signing: { percent: 30, label: "Signing" },
		Staging: { percent: 60, label: "Staging" },
		Done: { percent: 100, label: "Click! check tx" },
	};

	const currentProgress = progressMap[progress];

	return (
		<div className="w-full">
			<div className="w-full bg-bright-black rounded-full h-5">
				<div
					onClick={handleTxClick}
					className={`h-5 bg-bright-green text-s font-medium text-white text-center p-1 transition-all duration-1200 leading-none rounded-full ${currentProgress.percent === 100 && "cursor-pointer"}`}
					style={{
						width: `${currentProgress.percent}%`,
						opacity: progress === "None" ? 0 : 1,
						transition: "opacity 0.5s ease, width 1s ease",
					}}
				>
					{error ? error.toString() : currentProgress.label}
				</div>
			</div>
		</div>
	);
}
