import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import ScrollTo from "react-scroll-into-view";
import homepage from "../image/homepage.gif"
const Homepage = () => {
    return (
        <>
            <section id="homepage" >
                <div className="typewriter">
                    <h1 className="type-style homepage-typewriter">
                        Welcome to my universe !
                    </h1>
                </div>
                <div className="homepage-gif">
                    <img src={homepage} alt="My homepage cat" />
                </div>
                <ScrollTo className='scroll' selector={'#about-section'}>
                    <AiOutlineDown className='icon-down' />
                </ScrollTo>
            </section>
        </>

    )
}

export default Homepage
