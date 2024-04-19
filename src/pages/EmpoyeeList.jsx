import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";
import AllEmployees from "../component/AllEmployees";
import EmployeeModal from "../component/employeeModal";

const EmpoyeeList = () => {
  return (
    <>
    <Navbar />

    <AllEmployees/>
      <EmployeeModal/>
    <Footer />
    </>
  )
}

export default EmpoyeeList
