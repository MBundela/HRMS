import { useState } from "react";
import { API } from "../api";

function AttendanceForm() {
  const [form,setForm]=useState(
    {
      empId:"", 
      date:"", 
      status:"Present"
    }
  );

  const submit = async ()=>{
    await fetch(`${API}/attendance`,{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify(form)
    });
    alert("Attendance Marked");
  };

  return (
    <div className="card">
      <h2>Mark Attendance</h2>
      <input placeholder="Employee ID" onChange={event=>setForm({...form,empId:event.target.value})}/>
      <input type="date" onChange={event=>setForm({...form,date:event.target.value})}/>
      <select onChange={event=>setForm({...form,status:event.target.value})}>
        <option>Present</option>
        <option>Absent</option>
      </select>
      <button onClick={submit}>Save</button>
    </div>
  );
}

export default AttendanceForm
