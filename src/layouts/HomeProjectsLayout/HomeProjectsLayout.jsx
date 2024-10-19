import React from 'react'
import { Link } from 'react-router-dom'
import './HomeProjectsLayout.css'
const HomeProjectsLayout = ({children,title}) => {
  return (
    <div className='home-projects-layout'>
        <div className='header'>
            <div className='title'><div className='line'></div><span>{title}</span></div>
            <div className='see-more'><Link to="/projects">See more</Link></div>
        </div>
        <div className='projects-list'>
            {children}
        </div>
        
    </div>
  )
}

export default HomeProjectsLayout