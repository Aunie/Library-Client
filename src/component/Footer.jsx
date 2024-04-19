import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex bg-gray-400'>
      <section className='bg-green-300 w-[33.3%]'>
        <ul className='underline text-sm italic'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
     
        </ul>
      </section>

      <section className='bg-red-400 w-[33.3%]'>
        <ul>
        <li><Link to={'/ebooks'}>List of Books</Link></li>
        <li><Link to={'/studentRegistration'}>Student Regstration</Link></li>
        </ul>
      </section>
      <section className='bg-blue-300 w-[33.3%]'>
        <p>
            All rights have been reserved by <span>@elibraryPunjab</span>
        </p>
      </section>
    </div>
  )
}

export default Footer
