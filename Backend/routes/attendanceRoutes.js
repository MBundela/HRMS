import express from "express";
import Attendance from "../models/Attendance.js";

const router = express.Router();


router.post("/", async (req, res) => {
  const { empId, date, status } = req.body;
  if (!empId || !date || !status)
    return res.status(400).json({ msg: "All fields required" });

  const record =await Attendance.create(req.body);
  res.status(201).json(record);
});

router.get("/:empId", async (req, res) => {
  const data =await Attendance.find({ empId: req.params.empId });
  res.json(data);
});

export default router;
