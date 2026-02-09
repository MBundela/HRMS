import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// CORS FIX
app.use(cors({
  origin: [
    "https://employee-xz5m.vercel.app",
    "http://localhost:5173"
  ],
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

app.options("*", cors());
app.use(express.json());

// DB Connection
connectDB();

// Root Test
app.get("/", (req, res) => {
  res.send("HRMS Backend Running Successfully 🚀");
});

// Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);

// PORT FIX FOR RENDER
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
