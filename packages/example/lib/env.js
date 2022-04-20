import { resolve } from "path";
import { Log } from "./log.js";
import { config } from "dotenv";
const log = new Log("env.js");
let read = false;
export function env() {
    readEnv();
    return {
        test: process.env.TEST,
        logLevel: process.env.LOG_LEVEL,
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
