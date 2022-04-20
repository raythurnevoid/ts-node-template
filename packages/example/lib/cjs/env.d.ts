import type { Config } from "@raythurnevoid/node-colorful-log/types";
export declare function env(): Env;
interface Env {
    test: string;
    logLevel: Config["logLevel"];
}
export {};
