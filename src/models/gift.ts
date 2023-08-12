import mongoose from "mongoose";
import { Types } from "mongoose";

const userSchema = new mongoose.Schema<any>(
  {
    id: String,
    title_en: String,
    description_en: String,
    title_mon: String,
    description_mon: String,
    screen: String,
    img: String,
    amount: Number,
    date: String,
  },
  { timestamps: true }
);

const users = mongoose.model<any>("gift", userSchema);
export default users;
