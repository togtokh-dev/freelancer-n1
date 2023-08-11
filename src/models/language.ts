import mongoose from "mongoose";
import { Types } from "mongoose";

const userSchema = new mongoose.Schema<any>(
  {
    type: String,
    en: String,
    mon: String,
  },
  { timestamps: true }
);

const users = mongoose.model<any>("language", userSchema);
export default users;
