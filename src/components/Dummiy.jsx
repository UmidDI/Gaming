import React from 'react'
import rasm from '../image/about_ai.png'
import arow from '../image/arrow 6.png'
import '../style/dummiy.css'
function Dummiy() {
  return (
    <section className='dummiy'>
      <div className="container">
        <div className="dummiy__wrapper">
            <div className="dummiy__text">
                <h6>Home / <span> About us</span></h6>
                <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <button>Get in touch <img src={arow} alt="" /></button>
            </div>
            <img className='ai__img' src={rasm} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Dummiy
