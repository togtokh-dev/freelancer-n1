import mongoose from "mongoose";
import { Types } from "mongoose";

const userSchema = new mongoose.Schema<any>(
  {
    id: String,
    title: String,
    screen: String,
    img: String,
    amount: Number,
    description: String,
    date: String,
  },
  { timestamps: true }
);

const users = mongoose.model<any>("gift", userSchema);
export default users;
