import React from 'react'
import { FaCalculator } from "react-icons/fa6";
import { HiIdentification } from "react-icons/hi";
import { PiCursorFill } from "react-icons/pi";

export default function About() {
    return (
        <section className='container1' id='about'>

            <div className="inner_section row ">
                <h3>ABOUT</h3>
                <img src={require('../Assets/pic3.png')} alt="" className="left_img col-xl-4" />
                <div className="right_section col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className="side row ">
                        <HiIdentification  className='icon col-lg-1 col-md-1 col-sm-1' />
                        <div className="inside_text col-lg-11 col-md-11 col-sm-11 ">
                            <h6>Frontend Developer</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, totam?</p>
                        </div>
                    </div>

                    <div className="side row">
                        <FaCalculator className='icon col-lg-1  col-md-1 col-sm-1' />
                        <div className="inside_text col-lg-11 col-md-11 col-sm-11 ">
                            <h6>Backend Developer</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, totam?</p>
                        </div>
                    </div>

                    <div className="side row">
                        <PiCursorFill className='icon col-lg-1  col-md-1 col-sm-1' />
                        <div className="inside_text col-lg-10 col-md-10 col-sm-10 ">
                            <h6>Fullstack Developer</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, totam?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
