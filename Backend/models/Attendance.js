import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  empId: String,
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ["Present", "Absent"] }
});

export default mongoose.model("Attendance", attendanceSchema);
