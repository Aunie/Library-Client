import React from 'react'

const Banner = () => {
  return (
    <div className='flex bg-yellow-400 text-white text-4xl'>
      <section className='bg-red-500 p-4 w-[25%]'>
        E-Library Foundation
      </section>
      <section className='bg-blue-500 w-[50%]'>
        <img className="w-[100%] rounded-xl" src="https://images.unsplash.com/photo-1529148482759-b35b25c5f217?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
      </section>
      <section className='bg-green-600 w-[25%]'>
        <span className='font-bold'>Best Selling Book</span>
      </section>
    </div>
  )
}

export default Banner
