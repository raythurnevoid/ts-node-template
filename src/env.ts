import { resolve } from "path";
import { config } from "dotenv";
import { Log } from "./log";

const log = new Log(module);

export function env() {
	readEnv();

	return {
		test: process.env.TEST,
	};
}

function readEnv() {
	const envFilePath = resolve(process.cwd(), ".env");
	log.info(".env file:", envFilePath);
	config({
		path: resolve(envFilePath),
	});
}
