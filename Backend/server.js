// import express from "express";
// import cors from "cors";
// import { connectDB } from "./db.js";
// import employeeRoutes from "./routes/employeeRoutes.js";
// import attendanceRoutes from "./routes/attendanceRoutes.js";
// import dotenv from "dotenv";

// dotenv.config();
// const app = express();


// app.use(cors({
//   origin: [
//     "https://employee-xz5m.vercel.app",
//     "http://localhost:5173"
//   ],
//   methods: ["GET","POST","PUT","DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true
// }));

// app.options("*", cors());
// app.use(express.json());


// connectDB();

// app.get("/", (req, res) => {
//   res.send("HRMS Backend Running Successfully");
// });

// app.use("/api/employees", employeeRoutes);
// app.use("/api/attendance", attendanceRoutes);

// const PORT = process.env.PORT || 4500;
// app.listen(PORT, () => console.log(`Server running on ${PORT}`));

import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

const allowedOrigins = [
  "https://employee-xz5m.vercel.app",
  "http://localhost:5173"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.options("*", cors());


connectDB()
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));


app.get("/", (req, res) => res.send("HRMS Backend Running Successfully"));
app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);


const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

