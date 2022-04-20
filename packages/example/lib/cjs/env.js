"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const path_1 = require("path");
const log_js_1 = require("./log.js");
const dotenv_1 = require("dotenv");
const log = new log_js_1.Log("env.js");
let read = false;
function env() {
    readEnv();
    return {
        test: process.env.TEST,
        logLevel: process.env.LOG_LEVEL,
    };
}
exports.env = env;
function readEnv() {
    if (!read) {
        const envFilePath = (0, path_1.resolve)(process.cwd(), ".env");
        log.i(".env file:", envFilePath);
        (0, dotenv_1.config)({
            path: (0, path_1.resolve)(envFilePath),
        });
        read = true;
    }
}
