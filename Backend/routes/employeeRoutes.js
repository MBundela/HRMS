import express from "express";
import Employee from "../models/Employee.js";

const router = express.Router();

router.post("/",async (req, res)=>{
  try {
    const { empId, name, email, department } = req.body;

    if (!empId || !name || !email || !department)
      return res.status(400).json({ msg: "All fields required" });

    const exists =await Employee.findOne({ empId });
    if (exists) return res.status(409).json({ msg: "Employee ID already exists" });

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email))
      return res.status(400).json({ msg: "Invalid email format" });

    const emp =await Employee.create(req.body);
    res.status(201).json(emp);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});


router.get("/", async (req, res) => {
  const data =await Employee.find();
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

export default router;
