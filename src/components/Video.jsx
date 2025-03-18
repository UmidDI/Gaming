import React from 'react'
import '../style/video.css'
import rasm1 from '../image/Hero Video.png'
import rasm2 from '../image/pticka.png'
function Video() {
  return (
    <section className='video'>
      <div className="container">
        <div className="video__wrapper">
        <img className='video__img' src={rasm1} alt="" />
        <div className="video__text">
            <h2>Lorem Ipsum is simply dummy text.</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
            <ul>
                <li><img src={rasm2} alt="" />Lorem Ipsum is simply</li>
                <li><img src={rasm2} alt="" />Lorem Ipsum is simply</li>
                <li><img src={rasm2} alt="" />Lorem Ipsum is simply</li>
                <li><img src={rasm2} alt="" />Lorem Ipsum is simply</li>
            </ul>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Video
