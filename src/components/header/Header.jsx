import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/alex-portret.png'
import HeaderSocial from './HeaderSocials'
import TypeWriter from './TypeWriter'




const Header = () => {
  return (
    <header>
      <div className="container header__container">
     
        <div className="header text">
          <h1 className="text-light">Hey</h1>
          <h1 className='home_title'>I'm <span>Alex</span></h1>
          <TypeWriter />
          <CTA />
          <HeaderSocial />
        </div>
        
        <div className = "header image">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
