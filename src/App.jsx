import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Books from './pages/books'
import StudentRegistration from './pages/studentRegistration'
import Employee from './pages/Employee'
import StudentsList from './pages/studentsList'
import BooksList from './pages/BooksList'
import EmpoyeeList from './pages/EmpoyeeList'
import Login from './component/Login'
import RegisterPage from './pages/RegisterPage'
import StudentPortal from './pages/studentPortal'

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/books' element={<Books/>}/>
            <Route path='/studentRegistration' element={<StudentRegistration/>}/>
            <Route path='/employee' element={<Employee/>}/>
            <Route path='/studentList' element={<StudentsList/>}/>
            <Route path='/bookList' element={<BooksList/>}/>
            <Route path='/EmployeeList' element={<EmpoyeeList/>}/>
            
            <Route path='/studentportal' element={<StudentPortal />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App