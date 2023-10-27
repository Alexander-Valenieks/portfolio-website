import React from 'react'
import './Skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skills">
      <h5>What I Can Do</h5>
      <h2>My Skill Set</h2>

      <div className="container skills__container">
        <div className="skills front__end">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>HTML | CSS</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Typescript</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Redux</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Figma</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="skills back__end">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Java | Spring</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Hibernate</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Rest API</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Node</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="skills design">
          <h3>Other skills</h3>
          <div className="skills__content">
          <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>OOP | Design Patterns</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Testing</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>UX/UI</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Seo</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>VsCode | JetBrains</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Git</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
