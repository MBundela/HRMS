import { useEffect, useState } from "react";
import { API } from "../api";

function EmployeeList() {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);

  const load =async () => {
    const res =await fetch(`${API}/employees`);
    const Data =await res.json();
    setData(Data);
    setLoading(false);
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
