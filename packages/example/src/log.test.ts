import { assert, it } from "vitest";
import { Log, setLogLevel } from "./log.js";

const log = new Log("log.test.js");

it("log", () => {
	setLogLevel("debug");

	log.info(`test`);

	assert.strictEqual(1, 1);
});
