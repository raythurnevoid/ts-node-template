import { env } from "./env";

async function main() {
	console.log(`Hello ${env().test}`);
}

main().catch((error) => {
	console.error(error.stack);
});

export {};
