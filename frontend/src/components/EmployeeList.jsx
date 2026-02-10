import { useEffect, useState } from "react";
import { API } from "../api";

function EmployeeList() {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);

const load = async () => {
  try {
    const res = await fetch(`${API}/employees`, {
      credentials: "include", 
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    setData(data);
  } catch (err) {
    console.error("Failed to load employees:", err);
  } finally {
    setLoading(false);
  }
};

  const del = async (id) => {
    await fetch(`${API}/employees/${id}`, 
      { 
        method:"DELETE" 
      }
    );
    load();
  };

  useEffect(()=>{ 
    load(); 
  },[]);

  if(loading) return <p>Loading...</p>;
  if(data.length===0) return <p>No Employees Found</p>;

  return (
    <div className="card">
      <h2>Employee List</h2>
      {data.map(event=>(
        <div key={event._id} className="row">
          {event.empId} - {event.name} - {event.department}
          <button onClick={()=>del(event._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
