import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/Css/FooterNav.css"

const Footer = () => {
  return (
    <div>
        <nav className='footer-nav'>
            <ul>
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/admin/create"> Admin Reg </Link></li>
                <li> <Link to="/admin/login"> Admin Reg </Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Footer