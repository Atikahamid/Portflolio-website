import React from 'react'
 
export default function Home() {
  return (
    <section className='container'>
      <div className="section1  ">
        <p className='one_p'>Web Developer</p>
        <h1 className='heading_size'>Hello, My Name is Atika Hamid</h1>
        <p className='two_p'>I am passionate MERN stack Developer want to work with devotions, and enthusiassm. I can develope websites, web-app and many more using ReactJs, NodeJs, MongoDB, HTML, CSS, Bootstrap etc.</p>
        <div className="buttons">
          <button className="btn_front">Projects</button>
          <button className="btn2">Linkedin</button>
        </div>
      </div>
      <img className='hero_img' src={require('../Assets/my-pic.png')} alt="" />
      <div className='topBlur'></div>
      <div className='bottomBlur'></div>
      
    </section>
  )
}
