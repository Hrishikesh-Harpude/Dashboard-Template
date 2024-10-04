import React, { useState } from 'react'
import { IoIosArrowBack , IoIosArrowForward} from 'react-icons/io'
import "./Sliderbar.css"
import MenuList from '../Menu/MenuList'

const Sliderbar = () => {
    const [isOpen,setIsOpen]=useState();
    const toggle=()=> setIsOpen(!isOpen);
  return (
    <div className='sidebar-container'>
        <div className="sidebar-toggle" onClick={toggle}>{isOpen?
        <IoIosArrowBack/> :<IoIosArrowForward/>} </div>
        <div className={isOpen ? "sidebar open":"sidebar"}>
            <div className="sidebar--logo">T R A X</div> 
            <MenuList/>
            
        </div>

       
    </div>
  )
}

export default Sliderbar