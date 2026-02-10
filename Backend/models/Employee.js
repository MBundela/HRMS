import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  empId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true }
});

console.log(employeeSchema)
export default mongoose.model("Employee", employeeSchema);
