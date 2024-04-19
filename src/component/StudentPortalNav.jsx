import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentPortalNav = () => {
  

  return (
    <div>
      <nav className="bg-[#A0153E] text-[#FFF3C7] flex justify-between items-center pe-14 ">
        <ul className="p-6 flex  w-[100%]  text-xl  gap-12 ">
          <li className="">
            <Link to="/studentsPortal">Home</Link>
          </li>
          <li className="">
            <Link to="/studentsPortal">Profile Setting</Link>
          </li>
        </ul>

        <span>
          <p>Welcome</p>
          <p className="  font-extrabold  ">Mr Aun</p>
        </span>

        <img
          className="w-[60px] rounded-full mx-4 "
          src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
          alt=""
        />

        <button className="text-md  bg-[#FF8E8F] rounded-md px-3 py-1 italic        ">
          LogOut
        </button>
      </nav>
    </div>
  );
};

export default StudentPortalNav;
