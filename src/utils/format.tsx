export const formatAddress = (address: string): string => {
	return "#" + address.slice(0, 4);
};

export function uuidToUint8Array(uuid: string): Uint8Array {
	const hex = uuid.replace(/-/g, "");

	const bytes = new Uint8Array(hex.length / 2);
	for (let i = 0; i < hex.length; i += 2) {
		bytes[i / 2] = Number.parseInt(hex.slice(i, i + 2), 16);
	}
	return bytes;
}

export const formatWithCommas = (value: number): string =>
	value.toLocaleString("en-US");

export const formatWithSuffix = (value: number): string => {
	if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
	if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
	return value.toString();
};
