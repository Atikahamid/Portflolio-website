import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Contact() {
    return (
        <section className="contact_section row">
            <div className="left_contact col-4">
                <h1>Contact</h1>
                <h3>Feel free to reach out!</h3>
            </div>
            <div className="right_contact col-4">
                <ul>
                    <li className="contact_link">
                        <IoMdMail className='contact_icon' />
                        <a href="mailto:hafizaatika965@gmail.com" target='_blank' rel='noopener noreferrer'>hafizaatika965@gmail.com</a>
                    </li>
                    <li className="contact_link">
                        <FaLinkedin className='contact_icon' />
                        <a href="https://www.linkedin.com/in/atika-hamid-2b183527a" target='_blank' rel='noopener noreferrer'>linkedin.com/Atikahamid</a>
                    </li>
                    <li className="contact_link">
                        <FaGithub className='contact_icon' />
                        <a href="https://github.com/Atikahamid" target='_blank' rel='noopener noreferrer'>github.com/Atikahamid</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
