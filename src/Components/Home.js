import React from 'react'
 
export default function Home() {
  return (
    <section className='container'>
      <div className="section1  ">
        <p className='one_p'>Web Developer</p>
        <h1 className='heading_size'>Hello, My Name is Atika Hamid</h1>
        <p className='two_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet placeat veniam, corrupti ut dignissimos esse aperiam delectus sed atque maxime aliquam magnam molestiae fugiat odio, aspernatur autem porro dolores.</p>
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
