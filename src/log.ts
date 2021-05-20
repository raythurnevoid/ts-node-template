import { buildLogger, defaultConfig } from "@raythurnevoid/node-colorful-log";
import type { Config } from "@raythurnevoid/node-colorful-log";

const config: Config = {
	...defaultConfig,
	logLevel: "none",
};

export const Log = buildLogger(() => config);

export function setLogLevel(logLevel: Config["logLevel"]) {
	config.logLevel = logLevel;
}
