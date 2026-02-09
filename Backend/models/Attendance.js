import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  empId: String,
  date: String,
  status: { type: String, enum: ["Present", "Absent"] }
});

export default mongoose.model("Attendance", attendanceSchema);
