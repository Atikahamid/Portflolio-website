import React from 'react'
import skills from '../data/skills.json';
import history from '../data/history.json';

export default function Experience() {
  return (
    <section className='container2' id='experience'>
        <h3 className='exp_title'>EXPERIENCE</h3>
        <div className="exp_content row">
            <div className='skills col-xl-6 col-lg-12 col-md-12 col-sm-12 row'>{
                skills.map((skill, id) => {
                    return(
                        <div key={id} className='skill col-xl-4 col-lg-4 col-md-4 col-sm-6 '>
                            <div>
                                <img src={skill.imgSource} className='skill_img' alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    )
                })
                }</div>
            <ul className='history col-xl-6 col-lg-12 col-md-12 col-sm-12'>
                {
                    history.map((historyItem, id) => {
                        return <li key={id} className='historyItem'>
                            <img src={historyItem.imgSourc} className='history_img' alt="" />
                            <div className='historyDetail'>
                                <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experience.map((experience, id) => {
                                        return <li key={id}>{experience} </li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
        <div className="thirdBlur"></div>
    </section>
  )
}
