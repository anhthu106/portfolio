import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import ScrollTo from "react-scroll-into-view";

const Homepage = () => {
    return (
        <>
            <section id="homepage" >
                <div className="typewriter">
                    <h1 className="type-style">hello there!</h1>
                </div>
                <ScrollTo className='scroll' selector={'#about-section'}>
                    <AiOutlineDown className='icon-down' />
                </ScrollTo>
            </section>
        </>

    )
}

export default Homepage
