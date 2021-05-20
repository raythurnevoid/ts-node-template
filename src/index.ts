import { env } from "./env";
import { Log } from "./log";

const log = new Log("index.ts");

async function main() {
	log.info(`Hello ${env().test}`);
}

main().catch((error) => {
	console.error(error.stack);
});

export {};
