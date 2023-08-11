import logger from "./logger";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

if (fs.existsSync(path.resolve(__dirname, "../../.env"))) {
  logger.debug("Using .env file to supply config environment variables");
  dotenv.config({ path: path.resolve(__dirname, "../../.env") });
} else {
  logger.debug(
    "Using .env.example file to supply config environment variables"
  );
  dotenv.config({
    path: path.resolve(__dirname, "../../.env.example"),
  }); // you can delete this after you create your own .env file!
}

export const MONGODB_URI = process.env["MONGODB_URI"];
export const MONGODB_DB = process.env["MONGODB_DB"];
export const ENVIRONMENT = process.env.NODE_ENV;

export const SESSION_SECRET = process.env["SESSION_SECRET"];

if (!SESSION_SECRET) {
  logger.error("No client secret. Set SESSION_SECRET environment variable.");
  process.exit(1);
}
