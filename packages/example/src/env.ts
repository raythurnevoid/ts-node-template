import { resolve } from "path";
import { Log } from "./log.js";
import { config } from "dotenv";
import type { Config } from "@raythurnevoid/rt0-logger/types";

const log = new Log("env.js");
let read: boolean = false;

export function env(): Env {
	readEnv();
	return {
		test: process.env.TEST!,
		logLevel: process.env.LOG_LEVEL! as Config["logLevel"],
	};
}

function readEnv() {
	if (!read) {
		const envFilePath = resolve(process.cwd(), ".env");
		log.i(".env file:", envFilePath);
		config({
			path: resolve(envFilePath),
		});
		read = true;
	}
}

interface Env {
	test: string;
	logLevel: Config["logLevel"];
}
