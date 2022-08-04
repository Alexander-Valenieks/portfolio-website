import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Aleksandrs Valenieks</a>

      <ul className='permalinks'>
        <li> <a href="#">home</a> </li>
        <li> <a href="#about">about</a> </li>
        <li> <a href="#experience">experience</a> </li>
        <li> <a href="#services">services</a> </li>
        <li> <a href="#portfolio">portfolio</a> </li>
        {/* <li> <a href="#testimonials">testimonials</a> </li> */}
        <li> <a href="#contact">contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/aleksandrs-valenieks-b81b16153/"> < BsLinkedin /> </a>
        <a href="https://www.facebook.com/aleksandrs.valenieks/"> < BsFacebook /> </a>
        <a href="https://www.instagram.com/valenieks_/"> < BsInstagram /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aleksandrs Valenieks. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
