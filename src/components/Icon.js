import React from 'react'
import { socialData } from '../data/socialData'
import { IconContext } from "react-icons";

const Icon = () => {
    return (
        socialData.map((socialData) => {
            return (
                <a key={socialData.id}
                    href={socialData.link}
                    className={socialData.name}>
                    <IconContext.Provider value={{ className: "icon-footer" }}>
                        {socialData.icon}
                    </IconContext.Provider>
                </a>
            )
        }
        )
    )
}

export default Icon
