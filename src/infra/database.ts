import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      'mongodb://127.0.0.1:27017/herocode-react-node'
    );
    console.log('Connect database successfull')
  } catch (error) {
    console.log("🚀 ~ file: database.ts:7 ~ connect ~ error:", error)
  }
}