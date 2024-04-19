import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";
import AllListing from "../component/AllListing";

const StudentsList = () => {

  return (
    <>
      <Navbar  />

    <AllListing/>

      <Footer />
    </>
  );
};

export default StudentsList;
