import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { LangDropDown } from './LangDropDown/LangDropDown'

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <div className='nav-container'>
            <div className='logo'>
                <Link to="/">
                    Aigo Building
                </Link>
            </div>
            <div className='links'>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/projects">Projects</Link></div>
                <div><Link to="/about-us">About US</Link></div>
                <div><Link to="/contact">Contact</Link></div>
                <LangDropDown/>
            </div>
        </div>
    </div>
  )
}

export default Navbar