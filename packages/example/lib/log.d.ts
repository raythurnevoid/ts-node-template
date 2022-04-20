import type { Config } from "@raythurnevoid/node-colorful-log/types";
export declare const Log: new (label: string) => import("@raythurnevoid/node-colorful-log/types").ILog;
export declare function setLogLevel(logLevel: Config["logLevel"]): void;
