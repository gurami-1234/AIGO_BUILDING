import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LangDropDown } from './LangDropDown/LangDropDown'
import { MdOutlineMenu } from "react-icons/md";
import './Navbar.css'

const Navbar = () => {
    const [respNavIsOpen,setRespNavIsOpen] = useState(false)
  return (
    <div className='nav-bar'>
        <div className='nav-container'>
            <div className='logo'>
                <Link to="/">
                    Aigo Building
                </Link>
            </div>
            <div className={respNavIsOpen?'links open':'links'}>
                <button className='close' onClick={()=>setRespNavIsOpen(false)}>X</button>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/projects">Projects</Link></div>
                <div><Link to="/about-us">About US</Link></div>
                <div><Link to="/contact">Contact</Link></div>
                <LangDropDown/>
                
            </div>
            <button className='menu-btn' onClick={()=>setRespNavIsOpen(true)}>
                <MdOutlineMenu/>
            </button>
        </div>
    </div>
  )
}

export default Navbar