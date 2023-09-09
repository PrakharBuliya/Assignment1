import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
