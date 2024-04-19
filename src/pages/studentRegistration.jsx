import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/navbar";
import axios from "axios";
import { toast } from "react-toastify";

const StudentRegistration = () => {
  const [data, setData] = useState({});

  const changeHandle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = async(e) => {
    e.preventDefault();
    // console.log(data)
  const resp= await axios.post('http://127.0.0.1:4000/api/students' , data )
        console.log(resp);

        if(resp.data){
        toast.success(resp.data)

        }

  };

 
  return (
    <>
      <Navbar />
      <div className=" bg-gray-300 w-[100%]">
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto">
            <form>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Name
                    </label>
                    <input
                      onChange={changeHandle}
                      type="text"
                      name="name"
                      placeholder="Enter Your Full Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Membership ID
                    </label>
                    <input
                      onChange={changeHandle}
                      type="text"
                      name="memberId"
                      placeholder="Enter Membership ID"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Gender
                    </label>

                    <select
                      name="gender"
                      onChange={changeHandle}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="select"> Select your gender </option>
                      <option value="male"> Male </option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Age
                    </label>
                    <input
                      onChange={changeHandle}
                      type="number"
                      name="age"
                      placeholder="Enter Your Age"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Book Issued
                    </label>

                    <select
                      name="status"
                      onChange={changeHandle}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="status"> Select Book Status </option>
                      <option value="yes"> Yes </option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={submitForm}
                  className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StudentRegistration;
