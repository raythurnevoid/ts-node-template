"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLogLevel = exports.Log = void 0;
const node_1 = require("@raythurnevoid/node-colorful-log/node");
const config = {
    ...node_1.defaultConfig,
    logLevel: "none",
};
exports.Log = (0, node_1.buildLogger)(() => config);
function setLogLevel(logLevel) {
    config.logLevel = logLevel;
}
exports.setLogLevel = setLogLevel;
