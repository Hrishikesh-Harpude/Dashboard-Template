import React from 'react'
import "./MenuList.css"
import { Link } from 'react-router-dom'
import { IoDiamond,
     IoSettingsOutline,
     IoHelp, IoList,
     IoCodeWorking
    } from 'react-icons/io5'

const MenuList = () => {
  return (
    <ul className='menu--list'>
        <li className='menu--list-item active'>
            <Link to="/">
            <IoDiamond/>
            Dashboard</Link>
        </li>
        <li className='menu--list-item'>
            <Link to="/">
            <IoList/>
            Task</Link>
        </li>
        <li className='menu--list-item'>
            <Link to="/">
            <IoHelp/>
            Help</Link>
        </li>
        <li className='menu--list-item'>
            <Link to="/">
            <IoSettingsOutline/>
            Setting</Link>
        </li>
    </ul>
  )
}

export default MenuList