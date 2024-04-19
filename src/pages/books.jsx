import React, { useState } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";
import axios from "axios";
const Books = () => {
  const [data, setData] = useState({});
    console.log(data);
  const changeHandle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const submitForm = async (e) => {
    e.preventDefault();
    // console.log(data);
    const resp = await axios.post('http://127.0.0.1:4000/api/books', data);
    console.log(resp);
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
                      Title
                    </label>
                    <input
                      onChange={changeHandle}
                      type="text"
                      name="title"
                      placeholder="Enter Book Title"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Author Name
                    </label>
                    <input
                      onChange={changeHandle}
                      type="text"
                      name="author"
                      placeholder="Enter Author Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>


                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Published Year
                    </label>
                    <input
                      onChange={changeHandle}
                      type="number"
                      name="publishedYear"
                      placeholder="Enter Published Year"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Genre
                    </label>

                    <select
                      name="genre"
                      onChange={changeHandle}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="status"> Select Book Genre </option>
                      <option value="Social Science"> Social Science </option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Sports">Sports</option>
                      <option value="Current Affairs">Current Affairs</option>
                      <option value="English Literature">English Literature</option>
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

export default Books;
