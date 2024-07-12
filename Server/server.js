import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./Config/dbConnection.js";
import projectRoute from "./Routes/projectRoute.js";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use("/api/projects", projectRoute);

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT} port`.bgGreen);
});
