import { env } from "./env.js";
import { Log, setLogLevel } from "./log.js";

const log = new Log("index.js");

async function main() {
	setLogLevel(env().logLevel);
	log.info(`Hello ${env().test}`);
}

main().catch((error) => {
	console.error(error.stack);
});

export {};
