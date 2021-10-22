import { readFile, writeFile } from "fs/promises";
import { cwd } from "process";

const packageJsonPath = `${cwd()}/lib/package.json`;
readFile(packageJsonPath).then(async (content) => {
	const packageJson = JSON.parse(content.toString("utf-8"));
	packageJson.type = "module";
	await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
});
