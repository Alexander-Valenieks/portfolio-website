import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio-page.png'
import IMG2 from '../../assets/project-tracker.png'

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Project Tracker',
    description: 'Project-Tracker is React based team management application, for managing different team tasks and tracking project status.',
    github: 'https://github.com/Alexander-Valenieks/Project-Tracker',
    demo: 'https://teamtracker-2f231.web.app/login'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="#" />
          </div>
          <h3>Portfolio website</h3>
          <p>Lately, I've been focusing on React front-end development, and as a result, I've achieved confidence and new skills. 
            This portfolio page illustrates it the best.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Alexander-Valenieks/Portfolio-Website" className="btn" target='_blank'>Github</a>
          </div>
        </article>
      {
        data.map(({id, image, title, description, github, demo}) => {
          return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target='_blank'>Github</a>
              <a href={demo} className="btn" target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio
