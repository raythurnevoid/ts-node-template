import { resolve } from "path";
import { config } from "dotenv";

readEnv();

export function env() {
	return {
		test: process.env.TEST,
	};
}

function readEnv() {
	const envFilePath = resolve(process.cwd(), ".env");
	console.info(".env file:", envFilePath);
	config({
		path: resolve(envFilePath),
	});
}
