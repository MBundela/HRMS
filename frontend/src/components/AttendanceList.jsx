import { useState } from "react";
import { API } from "../api";

function AttendanceList() {
  const [empId,setEmpId]=useState("");
  const [data,setData]=useState([]);

  const load = async ()=>{
    const res =await fetch(`${API}/attendance/${empId}`);
    setData(await res.json());
  };

  return (
    <div className="card">
      <h2>View Attendance</h2>
      <input placeholder="Employee ID" onChange={event=>setEmpId(event.target.value)}/>
      <button onClick={load}>View</button>

      {data.map((item,index)=>(
        <p key={index}>{item.date} - {item.status}</p>
      ))}
    </div>
  );
}

export default AttendanceList;
