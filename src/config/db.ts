import mongoose from "mongoose";
import bluebird from "bluebird";
import { MONGODB_URI, MONGODB_DB } from "../util/secrets";
const connectDB = async () => {
  mongoose.set("strictQuery", true);
  mongoose.Promise = bluebird;
  try {
    const conn = await mongoose.connect(`${MONGODB_URI}`, {
      dbName: MONGODB_DB,
      // useNewUrlParser: true,
      // useCreateIndex: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
    });
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
    const conn = await mongoose.connect(`${MONGODB_URI}`, {
      dbName: MONGODB_DB,
      // useNewUrlParser: true,
      // useCreateIndex: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
    });
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
