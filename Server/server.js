import dotenv from "dotenv";
dotenv.config();

import express from "express";
import colors from "colors";
import connectDB from "./Config/dbConnection.js";
import projectRoute from "./Routes/projectRoute.js";
import serviceRoute from "./Routes/serviceRoute.js";
import cors from "cors";

connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use("/api/projects", projectRoute);
app.use("/api/services", serviceRoute);

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT} port`.bgGreen);
});
