import mongoose from "mongoose";
import Dotenv from "dotenv"
Dotenv.config()

const connectDB = async () => {
  await mongoose;
  mongoose
    .set("strictQuery", true)
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    })
    .then(() => {
      console.log("connected to db");
    })
    .catch((error) => console.log(error));
};

export default connectDB;
