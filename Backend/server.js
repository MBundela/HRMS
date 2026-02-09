import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors({
  origin: "*",  
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("HRMS Backend Running Successfully 🚀");
});

app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);

app.listen(4500, () => console.log("Server running on 4500"));
