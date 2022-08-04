import React from 'react'
import './About.css'
import ME from '../../assets/alex-perfil-black.png'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {SiFuturelearn} from 'react-icons/si'
import {SiVisualstudiocode} from 'react-icons/si'

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <SiVisualstudiocode className='about__icon'/>
              <h5>Programming</h5>
              <small>Passionate about coding and getting to know Software Development</small>
            </article>
            <article className='about__card'>
              <SiFuturelearn className='about__icon'/>
              <h5>Learning</h5>
              <small>Love to spend time exploring and studying something new</small>
            </article>
            <article className='about__card'>
              <BsMusicNoteBeamed className='about__icon'/>
              <h5>Music Production</h5>
              <small>Time to time produce electronic music, love to see people dancing</small>
            </article>
          </div>

          <p>
          I’m a very open and communicative person, work well under pressure, have good problem-solving skills, tons of creativity, and a high level of dedication.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
