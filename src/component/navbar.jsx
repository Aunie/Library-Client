import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="">
        <ul className="p-6 flex border-red-900 w-[100%] text-xl bg-slate-500 text-white gap-12 ">
          <li className="">
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/books"}>Add Book</Link>
          </li>
          <li>
            <Link to={"/studentRegistration"}>Add Student</Link>
          </li>
          <li>
            <Link to={"/employee"}>Add Employee</Link>
          </li>
          <li>
            <Link to={"/studentList"}>List of Students</Link>
          </li>
          <li>
            <Link to={"/bookList"}>List of Books</Link>
          </li>
          <li>
            <Link to={"/EmployeeList"}>List of Employees</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
