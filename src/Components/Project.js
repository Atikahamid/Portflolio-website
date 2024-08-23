import React from 'react'

export default function Project() {
    return (
        <section className="container3 row" id="projects">
            <h3 className='pro_title'>PROJECTS</h3>
            <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img src={require('../Assets/code.jpg')} alt="" className="card_img" />
                <div className="cardDetail">
                    <h3>Project A</h3>
                    <p>This is a projectmade to learn the latest languages by building an app</p>
                    <ul>
                        <li className='proj_li'>React</li>
                        <li className='proj_li'>Express</li>
                        <li className='proj_li'>Node</li>
                    </ul>
                    <div className="button_proj">
                        <button className="btn btn1">Demo</button>
                        <button className="btn btn1">Source</button>
                    </div>
                </div>
            </div>

            <div className="card col-3">
                <img src={require('../Assets/code.jpg')} alt="" className="card_img" />
                <div className="cardDetail">
                    <h3>Project B</h3>
                    <p>This is a projectmade to learn the latest languages by building an app</p>
                    <ul>
                        <li className='proj_li'>React</li>
                        <li className='proj_li'>Express</li>
                        <li className='proj_li'>Node</li>
                    </ul>
                    <div className="button_proj">
                        <button className="btn btn1">Demo</button>
                        <button className="btn btn1">Source</button>
                    </div>

                </div>
            </div>

            <div className="card col-3">
                <img src={require('../Assets/code.jpg')} alt="" className="card_img" />
                <div className="cardDetail">
                    <h3>Project C</h3>
                    <p>This is a projectmade to learn the latest languages by building an app</p>
                    <ul>
                        <li className='proj_li'>React</li>
                        <li className='proj_li'>Express</li>
                        <li className='proj_li'>Node</li>
                    </ul>
                    <div className="button_proj">
                        <button className="btn btn1">Demo</button>
                        <button className="btn btn1">Source</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
