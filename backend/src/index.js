import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import messageRoutes from "./routes/message.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port on " + PORT);
  connectDB();
});
