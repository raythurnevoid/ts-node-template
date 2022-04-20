import { buildLogger, defaultConfig, } from "@raythurnevoid/node-colorful-log/node";
const config = {
    ...defaultConfig,
    logLevel: "none",
};
export const Log = buildLogger(() => config);
export function setLogLevel(logLevel) {
    config.logLevel = logLevel;
}
