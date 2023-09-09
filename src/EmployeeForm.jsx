import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

const EmployeeForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState();
  const [dob, setDob] = useState("");
  const [endDate, setEndDate] = useState();
  const [des, setDes] = useState("");
  const [currentSalary, setCurrentSalary] = useState();
  const [study, setStudy] = useState();

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    const dataToSubmit = {
      FirstName: firstName,
      LastName: lastName,
      DOB: dob,
      Study: study,
      StartDate: startDate,
      EndDate: endDate,
      CurrentSalary: currentSalary,
      Description: des,
    };

    try {
      const response = await axios.post(
        "https://sweede.app/DeliveryBoy/Add-Employee/",
        dataToSubmit
      );

      console.log("Response:", response.data);
      navigate("/employee-list");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl mt-20 mb-10 flex justify-center">
        Employee Registration Form
      </h2>
      <div className="flex justify-center">
        <form onSubmit={submitHandler}>
          <div className="grid grid-cols-2 gap-5">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First Name*
              </label>
              <input
                type="name"
                className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter your Name"
                required
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last Name*
              </label>
              <input
                type="name"
                id="lastName"
                name="lastName"
                className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter your Name"
                required
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="dob"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              DOB
            </label>
            <input
              type="date"
              className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your dob"
              value={dob}
              onChange={(event) => {
                setDob(event.target.value);
              }}
            />
          </div>

          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Study
            </label>
            <select
              id="countries"
              onChange={(event) => {
                setStudy(event.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>BE</option>
              <option>Btech</option>
              <option>BCA</option>
            </select>
          </div>

          <div date-rangepicker className="flex items-center mt-10">
            <div className="mb-6">
              <label
                htmlFor="dob"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Start Date
              </label>
              <input
                type="date"
                className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your dob"
                value={startDate}
                onChange={(event) => {
                  setStartDate(event.target.value);
                }}
              />
            </div>
            <span className="mx-4 text-gray-500">to</span>
            <div className="mb-6">
              <label
                htmlFor="end date"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                End Date
              </label>
              <input
                type="date"
                className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your dob"
                value={endDate}
                onChange={(event) => {
                  setEndDate(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="mb-6 mt-5">
            <label
              htmlFor="salary"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Current Salary
            </label>
            <input
              className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Enter your Name"
              onChange={(event) => {
                setCurrentSalary(event.target.value);
              }}
              required
            />
          </div>

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => {
              setDes(event.target.value);
            }}
          ></textarea>

          <div className="grid grid-cols-2">
            <button
              type="submit"
              className="text-black border bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto m-5 px-5 py-2.5 text-center "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="text-black border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto m-5 px-5 py-2.5 text-center"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
