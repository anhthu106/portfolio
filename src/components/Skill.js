import React from 'react'
import { skill } from '../data/skill'
import { IconContext } from "react-icons";

const Skill = () => {
    return (
        <section id='skill-section'>
            <h1 className="heading-primary type-style">my technical skills</h1>
            <div className="skills">
                {
                    skill.map((skill) => {
                        return (
                            <div className='skill-card' key={skill.id}>
                                <IconContext.Provider value={{ className: "skill-icon" }}>
                                    {skill.icon}
                                </IconContext.Provider>
                                <div className="skill-name">
                                    {skill.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </section >

    )

}

export default Skill
