import { Navbar } from 'components'
import Banner from 'components/Banner/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='main-layout'>
        <Navbar/>
        <Banner />
        <Outlet/> 
    </div>
  )
}

export default MainLayout