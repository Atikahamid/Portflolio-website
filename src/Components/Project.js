import React from 'react'
import projects from '../data/project.json';
import ProjectCard from './ProjectCard';
export default function Project() {
    return (
        <section className='container3' id='projects'>
            <h3 className='pro_title'>PROJECTS</h3>
            <div className="main_card row">
                {
                    projects.map((project, id) => {

                        return <ProjectCard key={id} project={project}/>
                    })
                }
            </div>
        </section>


        // <section className="container3" id="projects">
        //     <h3 className='pro_title'>PROJECTS</h3>
        //     <div className="main_card row">
        //         <div className="card1 col-xl-3 col-lg-5 col-md-5 col-sm-5">
        //             <img src={require('../Assets/code.jpg')} alt="" className="card_img " />
        //             <div className="cardDetail">
        //                 <h3>Project A</h3>
        //                 <p>This is a projectmade to learn the latest languages by building an app</p>
        //                 <ul>
        //                     <li className='proj_li'>React</li>
        //                     <li className='proj_li'>Express</li>
        //                     <li className='proj_li'>Node</li>
        //                 </ul>
        //                 <div className="button_proj">
        //                     <button className="btn btn1">Demo</button>
        //                     <button className="btn btn1">Source</button>
        //                 </div>
        //             </div>
        //         </div>

        // //         <div className="card1 col-xl-3 col-lg-5 col-md-5 col-sm-5">
        // //             <img src={require('../Assets/code.jpg')} alt="" className="card_img" />
        // //             <div className="cardDetail">
        // //                 <h3>Project B</h3>
        // //                 <p>This is a projectmade to learn the latest languages by building an app</p>
        // //                 <ul>
        // //                     <li className='proj_li'>React</li>
        // //                     <li className='proj_li'>Express</li>
        // //                     <li className='proj_li'>Node</li>
        // //                 </ul>
        // //                 <div className="button_proj">
        // //                     <button className="btn btn1">Demo</button>
        // //                     <button className="btn btn1">Source</button>
        // //                 </div>

        // //             </div>
        // //         </div>

        // //         <div className="card1 col-xl-3 col-lg-5 col-md-5 col-sm-5">
        // //             <img src={require('../Assets/code.jpg')} alt="" className="card_img" />
        // //             <div className="cardDetail">
        // //                 <h3>Project C</h3>
        // //                 <p>This is a projectmade to learn the latest languages by building an app</p>
        // //                 <ul>
        // //                     <li className='proj_li'>React</li>
        // //                     <li className='proj_li'>Express</li>
        // //                     <li className='proj_li'>Node</li>
        // //                 </ul>
        // //                 <div className="button_proj">
        // //                     <button className="btn btn1">Demo</button>
        // //                     <button className="btn btn1">Source</button>
        // //                 </div>
        // //             </div>
        // //         </div>
        // //     </div>

        // // </section>
    )
}
