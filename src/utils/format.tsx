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
