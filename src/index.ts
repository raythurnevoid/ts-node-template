import { env } from "./env";
import { Log, setLogLevel } from "./log";

const log = new Log(import.meta.url);

async function main() {
	setLogLevel(env().logLevel);
	log.info(`Hello ${env().test}`);
}

main().catch((error) => {
	console.error(error.stack);
});

export {};
