import { buildLogger, defaultConfig } from "@raythurnevoid/rt0-logger/node";
import type { Config } from "@raythurnevoid/rt0-logger/types";

const config: Config = {
	...defaultConfig,
	logLevel: "none",
};

export const Log = buildLogger(() => config);

export function setLogLevel(logLevel: Config["logLevel"]) {
	config.logLevel = logLevel;
}
