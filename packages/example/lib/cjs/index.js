"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_js_1 = require("./env.js");
const log_js_1 = require("./log.js");
const log = new log_js_1.Log("index.js");
async function main() {
    (0, log_js_1.setLogLevel)((0, env_js_1.env)().logLevel);
    log.info(`Hello ${(0, env_js_1.env)().test}`);
}
main().catch((error) => {
    console.error(error.stack);
});
