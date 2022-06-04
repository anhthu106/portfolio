import React from 'react'
import { projects } from '../data/projects'


const Project = () => {
    // import all images from folder projects
    function importAll(r) {
        let images = {};
        r.keys().map((item) => { return images[item.replace('./', '')] = r(item) });
        return images;
    }

    const images = importAll(require.context('../image', false, /\.(webp|png|jpe?g|svg)$/));

    // render the project
    return (
        <section id='project-section'>

            <h1 className="heading-primary type-style">my projects</h1>
            {projects.map((project) => {
                return (
                    <div key={project.id} className='projects'>
                        <div className="project-desc">
                            <h1 className='project-heading'>{project.name}</h1>
                            <p>{project.description}</p>
                            {project.tech.map(function (techs, i) {
                                return (
                                    <span className="tech" key={i}>
                                        {techs}
                                    </span>
                                );
                            })}
                            <div className='project-link'>
                                <a href={project.link}>View project</a>
                            </div>
                        </div>
                        <img className='project-img' src={images[project.img]} alt={project.name} />
                    </div>
                );
            })}
        </section>
    )
}

export default Project
