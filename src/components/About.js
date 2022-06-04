import React from 'react'
import profile from '../image/profile.jpeg'
import AnhThu_Resume from '../data/AnhThu_Resume.pdf'

const About = () => {
    return (
        <section id='about-section'>
            <h1 className="type-style heading-primary">about me</h1>
            <div className="about-me">
                <img className='about-img' src={profile} alt="Profile" />
                <div className="about-content">
                    <p className="content">
                        I am Thu, a freshman at RMIT University majoring in IT.
                        My minor is Data Analytics, however I'm also interested in web application.
                        Despite my lack of experience in the IT area, I find programming really intriguing and fascinating.
                        I also love exploring new technologies and developing a variety of innovative and beneficial applications
                        to enhance people's lives.
                    </p>
                    <a href={AnhThu_Resume}>
                        <button className="btn-download">My Resume</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
