import console from "console";
import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URl) {
    return console.log("Missing MONGODB_URL");
  }

  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URl, {
      dbName: "DevFlow",
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};
