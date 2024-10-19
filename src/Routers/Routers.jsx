import MainLayout from 'layouts/MainLayout/MainLayout'
import { About, Contact, Home, NotFound, Project, Projects } from 'pages'
import React from 'react'
import { Routes,Route } from 'react-router-dom'
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<NotFound/>} />
        </Route>
    </Routes>
  )
}

export default Routers