import React,{ useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './LangDropDown.css'

export const LangDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language,setLanguage] = useState({
        slug:"eng",
        value:"English"
    })
    
    const handleLanguageChange = (event) =>{
        const {name,text} = event.currentTarget
        setLanguage({slug:name,value:text})
        setIsOpen((prev) => !prev);
    }

  return (
    <div className="dropdown">

      <button className="dropdown-toggle" onClick={()=>setIsOpen(!isOpen)}>
        <img src={`${process.env.PUBLIC_URL}/images/${language.slug}_flag.png`} alt="" className='lang_image' /> 
        <IoIosArrowDown className='arrow-down' />
      </button>

      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>

        <button onClick={handleLanguageChange} name="geo" value="ქართული">
            <img src={`${process.env.PUBLIC_URL}/images/geo_flag.png`} className='flag'/> 
            ქართული
        </button>

        <button onClick={handleLanguageChange} name="eng" value="English">
            <img src={`${process.env.PUBLIC_URL}/images/eng_flag.png`} className='flag'/> 
            English
        </button>

        <button onClick={handleLanguageChange} name="ru" value="Русский">
            <img src={`${process.env.PUBLIC_URL}/images/ru_flag.png`} className='flag'/> 
            Русский
        </button>

      </div>
    </div>
  );
}
