import CryptoJS from "crypto-js";

export function sum(a: number, b: number): number {
	return a + b;
}

export function md5(value: string): string {
	return CryptoJS.MD5(value).toString();
}
