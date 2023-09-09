import axios from "axios";
import React, { useState, useEffect } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios("https://sweede.app/DeliveryBoy/Get-Employee/")
      .then((response) => {
        const data = response.data;

        console.log(data);
        setEmployees(data);
      })
      .catch((error) => {
        console.error("Error fetching employee list:", error);
      });
  }, []);

  return (
    <div
      className="w-1330 h-655 bg-white rounded-lg border-1 border-gray-300 shadow-lg p-5"
      style={{ top: "205px", left: "115px" }}
    >
      <h2 className="flex justify-center text-3xl mb-10 gap-10">
        Employee List
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left"> Name</th>

              <th className="py-2 px-4 text-left">DOB</th>
              <th className="py-2 px-4 text-left">Start Date</th>
              <th className="py-2 px-4 text-left">End Date</th>
              <th className="py-2 px-4 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="py-2 px-4">
                  {employee.FirstName + " "}
                  {employee.LastName}
                </td>

                <td className="py-2 px-4">{employee.DOB}</td>
                <td className="py-2 px-4">{employee.StartDate}</td>
                <td className="py-2 px-4">{employee.EndDate}</td>
                <td className="py-2 px-4">{employee.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
