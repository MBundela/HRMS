import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/hrms-lite");
  console.log("MongoDB Connected");
};
