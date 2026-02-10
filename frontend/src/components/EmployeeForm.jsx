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

  const submit = async () => {
  try {
    const response = await fetch(`${API}/employees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      alert("Server error: " + (errorData.message || response.statusText));
      return;
    }

    const data = await response.json();
    alert("Employee added successfully!");
    setForm({ empId: "", name: "", email: "", department: "" });
  } catch (err) {
    console.error("Network error:", err);
    alert("Failed to connect to server. Check backend URL or server status.");
  }
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
