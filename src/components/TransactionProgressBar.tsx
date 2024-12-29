import { heimdallScanUrl, odinScanUrl, Planet } from "@/constants/planet";
import type { SigningError, SigningProgress } from "@/hooks/useSignAndStage";

interface Props {
	progress: SigningProgress;
	txId: string | null;
	error: SigningError;
	planet: Planet;
	className?: string;
}

export default function TransactionProgressBar({
	progress,
	txId,
	error,
	planet,
	className,
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
		None: { percent: 0, label: "Wait..." },
		Signing: { percent: 30, label: "Signing" },
		Staging: { percent: 60, label: "Staging" },
		Done: { percent: 100, label: "Click! check tx" },
	};

	const currentProgress = progressMap[progress];

	return (
		<div className={`w-full ${className}`}>
			<p className="text-s">
				{error ? error.toString() : currentProgress.label}
			</p>
			<div className="w-full bg-bright-black h-1">
				<div
					onClick={handleTxClick}
					className={`h-1 bg-bright-green transition-all duration-1200 leading-none ${currentProgress.percent === 100 && "cursor-pointer"}`}
					style={{
						width: `${currentProgress.percent}%`,
						opacity: progress === "None" ? 0 : 1,
						transition: "opacity 0.5s ease, width 1s ease",
					}}
				></div>
			</div>
		</div>
	);
}
