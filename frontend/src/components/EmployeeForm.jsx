import { useState } from "react";
import { API } from "../api";

function EmployeeForm() {
  const [form, setForm] = useState(
    { 
      empId:"", 
      name:"", 
      email:"", 
      department:"" 
    }
  );

  const submit =async () => {
    await fetch(`${API}/employees`, {
      method: "Post",
      headers: { "Content-Type": "Application/Json" },
      body: JSON.stringify(form)
    });
    alert("Employee Added");
  };

  return (
    <div className="card">
      <h2>Add Employee</h2>
      <input placeholder="Employee ID" onChange={e=>setForm({...form, empId:e.target.value})}/>
      <input placeholder="Full Name" onChange={e=>setForm({...form, name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setForm({...form, email:e.target.value})}/>
      <input placeholder="Department" onChange={e=>setForm({...form, department:e.target.value})}/>
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default EmployeeForm;
