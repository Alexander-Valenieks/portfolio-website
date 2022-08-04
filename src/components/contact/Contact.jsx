import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>aleksandrs.valenieks@gmail.com</h5>
              <a href='mailto:aleksandrs.valenieks@gmail.com' target="_blank">Send an email</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>@AleksandrsValenieks</h5>
              <a href='https://m.me/aleksandrs.valenieks/' target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+37258367479</h5>
              <a href='https://wa.me/37258367479' target="_blank">Send a message</a>
            </article>
          </div>
      </div>
    </section>
  )
}

export default Contact
