import {
	buildLogger,
	defaultConfig,
} from "@raythurnevoid/node-colorful-log/node";
import type { Config } from "@raythurnevoid/node-colorful-log/types";

const config: Config = {
	...defaultConfig,
	logLevel: "none",
};

export const Log = buildLogger(() => config);

export function setLogLevel(logLevel: Config["logLevel"]) {
	config.logLevel = logLevel;
}
