import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllListing = () => {
  const [studentData, setstudentData] = useState([]);

  const getStudets = async () => {
    const memerbs = await axios.get("http://127.0.0.1:4000/api/students");
    setstudentData(memerbs && memerbs.data.StudentsData);
  };

  // console.log(studentData);

  useEffect(() => {
    getStudets();
  }, []);

  const deleteStudent = async (item) => {
    const deletedStudent = await axios.delete(
      "http://127.0.0.1:4000/api/students",
      { data: { id: item._id } }
    );
    // console.log(deletedStudent);
    if (deletedStudent.data) {
      location.reload();
      // navigate('/')
    }
  };

  /// edit functions down

  const [boolen, setBoolean] = useState(false);

  const editHandle = (item) => {
    console.log(item);
    setBoolean(true);

    if (item) {
      setData(item);
    }
  };

  const [data, setData] = useState({});
  // getting new values

  const changeHandle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  // send upate request

  const updateForm = async (e) => {
    e.preventDefault();

    const resp = await axios.put("http://127.0.0.1:4000/api/students", data);
    console.log(resp);

    if (resp.data) {
      location.reload();
    }
  };

  return (
    <>
      {boolen && (
        <secton className="bg-white border-red-100   absolute z-10  ">
          <div className=" bg-gray-300 w-[100vw]   ">
            <button
              onClick={() => {
                setBoolean(false);
              }}
              className="text-red-700 right-3 fixed "
            >
              Cancel
            </button>

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
                          value={data && data.name}
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
                          value={data && data.memberId}
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
                          value={data && data.gender}
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
                          value={data && data.age}
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
                          value={data && data.status}
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
                      onClick={updateForm}
                      className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </secton>
      )}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Student name
              </th>
              <th scope="col" className="px-6 py-3">
                Member ID
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((item) => {
              return (
                <>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      {item.name}
                    </th>

                    <td className="px-6 py-4">{item.memberId}</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {item.gender}
                    </td>
                    <td className="px-6 py-4">{item.age}</td>
                    <td className="px-6 py-4">{item.status}</td>

                    <td
                      onClick={() => editHandle(item)}
                      className=" cursor-pointer px-6 py-4 text-blue-500"
                    >
                      Edit
                    </td>

                    <td
                      onClick={() => deleteStudent(item)}
                      className="cursor-pointer px-6 py-4 text-red-500"
                    >
                      Delete
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllListing;
