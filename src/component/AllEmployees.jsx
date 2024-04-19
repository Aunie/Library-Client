import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllEmployees = () => {
  const [employeeData, setemployeeDataData] = useState([]);

  const getEmployees = async () => {
    const employees = await axios.get("http://127.0.0.1:4000/api/employee");
    setemployeeDataData(employees && employees.data.EmployeeData);
  };

  // console.log(employeeData);

  useEffect(() => {
    getEmployees();
  }, []);

  // const navigate = useNavigate()

  const deleteEmployee = async (item) => {
    const deletdEmployee = await axios.delete(
      "http://127.0.0.1:4000/api/employee",
      { data: { employeeId: item._id } }
    );
    console.log(deletdEmployee);
    if (deletdEmployee.data) {
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
  };

  // send upate request
  const updateForm = async (e) => {
    e.preventDefault();

    // console.log(data);
    const resp = await axios.put("http://127.0.0.1:4000/api/employee", data);
    console.log(resp);

    if (resp.data) {
      location.reload();
    }
  };

  return (
    <>
      {boolen && (
        <section className="bg-white border-red-100   absolute z-10  ">
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
                          Employee Name
                        </label>
                        <input
                          value={data && data.name}
                          onChange={changeHandle}
                          type="text"
                          name="name"
                          // placeholder="Enter Your Full Name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>

                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Employee ID
                        </label>
                        <input
                          value={data && data.employeeId}
                          onChange={changeHandle}
                          type="text"
                          name="employeeId"
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
                          <option value="select">
                            {" "}
                            Select Employee gender{" "}
                          </option>
                          <option value="male"> Male </option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>

                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Designation
                        </label>

                        <select
                          value={data && data.designation}
                          name="designation"
                          onChange={changeHandle}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                          <option value="status">
                            {" "}
                            Select Employee Desgnation{" "}
                          </option>
                          <option value="Web Developer"> Web Developer </option>
                          <option value="Graphic Designer">
                            Graphic Designer
                          </option>
                          <option value="Librarian">Librarian</option>
                          <option value="Lab Attendant">Lab Attendant</option>
                          <option value="Reading Room Attendant">
                            Reading Room Attendant
                          </option>
                          <option value="Receptionist">Receptionist</option>
                          <option value="Security Guard">Security Guard</option>
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
        </section>
      )}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Employee Name
              </th>
              <th scope="col" className="px-6 py-3">
                Employee ID
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Designation
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((item) => {
              return (
                <>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      {item.name}
                    </th>

                    <td className="px-6 py-4">{item.employeeId}</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {item.gender}
                    </td>
                    <td className="px-6 py-4">{item.designation}</td>
                    <td
                      onClick={() => editHandle(item)}
                      className="cursor-pointer px-6 py-4 text-blue-500"
                    >
                      Edit
                    </td>
                    <td
                      onClick={() => deleteEmployee(item)}
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

export default AllEmployees;
