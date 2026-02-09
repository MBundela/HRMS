import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <h1>Human Resource Management System</h1>
      <EmployeeForm />
      <EmployeeList />
      <AttendanceForm />
      <AttendanceList />
    </div>
  );
}
