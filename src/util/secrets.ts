import logger from "./logger";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

if (fs.existsSync(path.resolve(__dirname, "../../../../../.env"))) {
  logger.debug("Using .env file to supply config environment variables");
  dotenv.config({ path: path.resolve(__dirname, "../../../../../.env") });
} else {
  logger.debug(
    "Using .env.example file to supply config environment variables"
  );
  dotenv.config({
    path: path.resolve(__dirname, "../../../../../.env.example"),
  }); // you can delete this after you create your own .env file!
}
export const SQL = {
  DB_POSTGRESSQL_USER: process.env["DB_POSTGRESSQL_USER"],
  DB_POSTGRESSQL_DATABASE: process.env["DB_POSTGRESSQL_DATABASE"],
  DB_POSTGRESSQL_PASSWORD: process.env["DB_POSTGRESSQL_PASSWORD"],
  DB_POSTGRESSQL_PORT: Number(process.env["DB_POSTGRESSQL_PORT"]),
  DB_POSTGRESSQL_HOST: process.env["DB_POSTGRESSQL_HOST"],
};
export const NOSQL = {
  DB_MONGODB_USER: process.env["DB_MONGODB_USER"],
  DB_MONGODB_DATABASE: process.env["DB_MONGODB_DATABASE"],
  DB_MONGODB_PASSWORD: process.env["DB_MONGODB_PASSWORD"],
  DB_MONGODB_QUERY: process.env["DB_MONGODB_QUERY"],
  DB_MONGODB_HOST: process.env["DB_MONGODB_HOST"],
  DB_MONGODB_SERVER: process.env["DB_MONGODB_SERVER"],
};
export const ENVIRONMENT = process.env.NODE_ENV;

export const SESSION_SECRET = process.env["SESSION_SECRET"];

if (!SESSION_SECRET) {
  logger.error("No client secret. Set SESSION_SECRET environment variable.");
  process.exit(1);
}
