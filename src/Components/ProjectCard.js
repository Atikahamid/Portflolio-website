import React from 'react'

export default function ProjectCard({project: {title, imgSource,description,skills, demo, source}}) {
    return (
        <div className='card1'>
            <img src={imgSource} className='card_img' alt="" />
            <div className="cardDetail">
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                    {
                        skills.map((skill, id) => {
                           return <li key={id} className='proj_li'>{skill}</li>
                        })
                    }
                </ul>
                <div className="button_proj">
                    <button className="btn btn1"><a href={demo}>Demo</a></button>
                    <button className="btn btn1"><a href={source}>Source</a></button>
                </div>
            </div>
        </div>
    )
}
