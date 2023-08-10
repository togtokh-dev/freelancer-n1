import mongoose from "mongoose";
import bluebird from "bluebird";
import { NOSQL } from "../util/secrets";
const connectDB = async () => {
  mongoose.set("strictQuery", true);
  mongoose.Promise = bluebird;
  try {
    const conn = await mongoose.connect(
      `${NOSQL.DB_MONGODB_SERVER}://${NOSQL.DB_MONGODB_USER}:${NOSQL.DB_MONGODB_PASSWORD}@${NOSQL.DB_MONGODB_HOST}/${NOSQL.DB_MONGODB_QUERY}`,
      {
        dbName: NOSQL.DB_MONGODB_DATABASE,
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
      }
    );
    console.log(
      `Data base connected : ${conn.connection.host}@${conn.connection.name}`
    );
  } catch (error) {
    console.log(
      `MongoDB connection error. Please make sure MongoDB is running. ${error}`
    );
    process.exit(1);
  }
  mongoose.connection.on("disconnected", () => {
    console.log("DB Reload");
    connectReload();
  });
};
export const connectReload = async () => {
  mongoose.set("strictQuery", true);
  mongoose.Promise = bluebird;
  try {
    const conn = await mongoose.connect(
      `${NOSQL.DB_MONGODB_SERVER}://${NOSQL.DB_MONGODB_USER}:${NOSQL.DB_MONGODB_PASSWORD}@${NOSQL.DB_MONGODB_HOST}/${NOSQL.DB_MONGODB_QUERY}`,
      {
        dbName: NOSQL.DB_MONGODB_DATABASE,
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
      }
    );
    console.log(
      `Data base connected : ${conn.connection.host}@${conn.connection.name}`
    );
  } catch (error) {
    console.log(
      `MongoDB connection error. Please make sure MongoDB is running. ${error}`
    );
  }
};
export default connectDB;
