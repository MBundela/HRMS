import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  empId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
}, { timestamps: true });

const Employee = mongoose.model("Employee", employeeSchema); 

export default Employee;

