import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ListingOFBooks = () => {

    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const resp = await axios.get("http://127.0.0.1:4000/api/books");
        if (resp.data.BooksData) {
            setBooks(resp.data.BooksData);
        }
    };

    useEffect(() => {
        getBooks();
    }, []);





    const statusHandle = async (e) => {
        const data = e;

        const resp = await axios.put("http://127.0.0.1:4000/api/books", data);

        // console.log(resp.data.bookData);

        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        let hours = date.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; 
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const checkInTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${ampm}`;
        
        
        const resp2 = await axios.post("http://127.0.0.1:4000/api/booksHistory", { bookId: data._id, checkInTime });
        // console.log(e);
        
                if (resp.data.bookData) {
                    location.reload()
                }

    };



    const unAssignHandle = async (e) => {
        // console.log(e);

        const data = e;

        setTimeout(() => {

            const unAssign = async () => {
                const resp = await axios.put("http://127.0.0.1:4000/api/books/unassign", data);
                // console.log(resp);
                if (resp.data.bookData) {
                    location.reload()
                }
            }

            unAssign()

        }, 3000);

    }




    return (
        <div className="container max-w-3xl px-4 mx-auto sm:px-8">
            <div className="py-8">
                <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
                    <h2 className="text-2xl leading-tight">
                        EBooks
                    </h2>
                    <div className="text-end">
                        <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                            <div className=" relative ">
                                <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
                            </div>
                            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                Filter
                            </button>
                        </form>
                    </div>
                </div>
                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Title
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Author
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Genre
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Published Year
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">{item.title}</td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">{item.author}</td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">{item.genre}</td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">{item.publishedYear}</td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            {/* <button onClick={()=>statusHandle(item)} className={`py-1 px-2 rounded-full   ${item.status === "Available" ? "bg-[#f0fdf4] text-[#16803d] border-[#c5ecd3]  border-4" : "bg-[#fef2f2] text-[#bb221d] border-[#fbe3e3]  border-4"}`}> */}

                                            {item.status === 'Available' ? (
                                                <button onClick={() => statusHandle(item)} className={`py-1 px-2 rounded-full   ${item.status === "Available" ? "bg-[#f0fdf4] text-[#16803d] border-[#c5ecd3]  border-4" : "bg-[#fef2f2] text-[#bb221d] border-[#fbe3e3]  border-4"}`}>
                                                    {item.status === 'Available' ? "Available" : 'Issued'}
                                                </button>

                                            ) :
                                                (
                                                    <button onClick={() => unAssignHandle(item)} className={`py-1 px-2 rounded-full   ${item.status === "Available" ? "bg-[#f0fdf4] text-[#16803d] border-[#c5ecd3]  border-4" : "bg-[#fef2f2] text-[#bb221d] border-[#fbe3e3]  border-4"}`}>
                                                        {item.status === 'Not Available' ? "Issued" : 'Available '}
                                                    </button>
                                                )

                                            }



                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingOFBooks;
