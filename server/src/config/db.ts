import mongoose from "mongoose";
import { info } from "../chalk/chalk";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI ?? "");
    console.log(info(`Connected to MongoDB: ${conn.connection.host}`));
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
