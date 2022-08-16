import assert from "node:assert";
import test from "node:test";
import { Log, setLogLevel } from "./log.js";

const log = new Log("log.test.js");

test("log", () => {
	setLogLevel("debug");

	log.info(`test`);

	assert.strictEqual(1, 1);
});
