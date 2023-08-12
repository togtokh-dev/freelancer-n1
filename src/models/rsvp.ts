import mongoose from "mongoose";
import { Types } from "mongoose";

const userSchema = new mongoose.Schema<any>(
  {
    first_name: String,
    last_name: String,
    phone_code: String,
    phone_number: String,
    email: String,
    attending: String,
    guests: String,
    meal_preferences: String,
    questions_or_comments: String,
    date: String,
  },
  { timestamps: true }
);

const users = mongoose.model<any>("rsvp", userSchema);
export default users;
