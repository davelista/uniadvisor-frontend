import React from 'react'
import './AboutArea.css'

function AboutItems({
                        icon,
                        title,
                        text

                    }) {
    return (
        <>

                <div className={'about-item'}>
                    <div className={'about-item-icon'}>
                        {icon}
                        <br/>
                        <br/>
                    </div>
                    <div className={'about-item-title'}>
                        {title}
                        <br/>
                        <br/>
                    </div>
                    <div>
                        {text}
                    </div>
                </div>

            {/*DEVO AGGIUNGERE ROW E ITEM*/}
        </>
    )
}

export default AboutItems;