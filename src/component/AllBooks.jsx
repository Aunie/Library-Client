import axios from "axios";
import React, { useEffect, useState } from "react";

const AllBooks = () => {
  const [booksData, setbooksData] = useState([]);

  const getBooks = async () => {
    const books = await axios.get("http://127.0.0.1:4000/api/books");
    setbooksData(books && books.data.BooksData);
  };

  // console.log(booksData);

  useEffect(() => {
    getBooks();
  }, []);

  // const navigate = useNavigate()

  const deleteBook = async (item) => {
    const deletedBook = await axios.delete("http://127.0.0.1:4000/api/books", {
      data: { id: item._id },
    });
    console.log(deletedBook);
    if (deletedBook.data) {
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
    const resp = await axios.put("http://127.0.0.1:4000/api/books", data);
    console.log(resp);

    if (resp.data) {
      location.reload();
    }


  };





  

  const assignHandle =  async(e)=>{
    // console.log(e);

    const data = e;
        
    if(data.status==='Not Available'){
      setTimeout(() => {
          
          const unAssign = async()=>{
              const resp = await axios.put("http://127.0.0.1:4000/api/books/unassign", data);
              // console.log(resp);
              if(resp.data.bookData){
                  location.reload()
                          }
              }    

          unAssign()

      }, 1000 )
    }

}




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
                          Title
                        </label>
                        <input
                          value={data && data.title}
                          onChange={changeHandle}
                          type="text"
                          name="title"
                          // placeholder="Enter Your Full Name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>

                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Author
                        </label>
                        <input
                          value={data && data.author}
                          onChange={changeHandle}
                          type="text"
                          name="author"
                          placeholder="Enter Membership ID"
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
                          value={data && data.publishedYear}
                          onChange={changeHandle}
                          type="number"
                          name="publishedYear"
                          placeholder="Enter Your Age"
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
                          value={data && data.genre}
                          name="genre"
                          onChange={changeHandle}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                          <option value="status"> Select Book Genre </option>
                          <option value="Social Science">
                            {" "}
                            Social Science{" "}
                          </option>
                          <option value="Computer Science">
                            Computer Science
                          </option>
                          <option value="Sports">Sports</option>
                          <option value="Current Affairs">
                            Current Affairs
                          </option>
                          <option value="English Literature">
                            English Literature
                          </option>
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
          <thead className=" text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Book Title
              </th>
              <th scope="col" className="px-6 py-3">
                Book Author
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Published Year
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3 bd text-center ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {booksData.map((item) => {
              return (
                <>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      {item.title}
                    </th>

                    <td className="px-6 py-4">{item.author}</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {item.publishedYear}
                    </td>
                    <td className="px-6 py-4">{item.genre}</td>
                    <td
                      onClick={() => editHandle(item)}
                      className="cursor-pointer px-6 py-4 text-blue-500"
                    >
                      Edit
                    </td>



                    <td
                      onClick={() => deleteBook(item)}
                      className="cursor-pointer px-6 py-4 text-red-500"
                    >
                      Delete
                    </td>


                    <td className="cursor-pointer px-6 py-4 text-red-500">
                      <button onClick={() => assignHandle(item)} className={`py-1 px-2 rounded-full   ${item.status === "Available" ? "bg-[#f0fdf4] text-[#16803d] border-[#c5ecd3]  border-4" : "bg-[#fef2f2] text-[#bb221d] border-[#fbe3e3]  border-4"}`}>
                        {item.status === 'Not Available' ? "Issued" : 'Available '}
                      </button>
                    </td>
                 
                 
                    <td className="cursor-pointer px-6 py-4 text-red-500">
                      <button onClick={() => assignHandle(item)} className={`py-1 px-2 rounded-full    bg-[#d0c816] text-white border-[#fab702]  border-4`}>
                       History
                      </button>
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

export default AllBooks;
