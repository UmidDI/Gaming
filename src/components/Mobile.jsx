import React from 'react'
import '../style/mobile.css'
import ong from '../image/ong.png'
import rasm1 from '../image/pc_mobile (1).png'
import rasm2 from '../image/pc_mobile (2).png'
import rasm3 from '../image/pc_mobile (3).png'
import rasm4 from '../image/pc_mobile (4).png'
import rasm5 from '../image/pc_mobile (5).png'
import rasm6 from '../image/pc_mobile (6).png'
function Mobile() {
  return (
    <section className='mobile'>
      <div className="overfly"></div>
      <div className="container">
        <div className="text__mobile">
        <h3>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className="mobile__wrapper">
          <div className="pc__card">
            <div className="bolinmalar">
              <img className='ong' src={rasm1} alt="" />
              <h4>Mobile Game Development</h4>
              <img src={ong} alt="" />
            </div>
            <div className="bolinmalar">
              <img className='ong' src={rasm2} alt="" />
              <h4>PC Game Development</h4>
              <img src={ong} alt="" />
            </div>
            <div className="bolinmalar">
              <img className='ong' src={rasm3} alt="" />
              <h4>PS4 Game Development</h4>
              <img src={ong} alt="" />
            </div>
            <div className="bolinmalar">
              <img className='ong' src={rasm4} alt="" />
              <h4>AR/VR Solutions</h4>
              <img src={ong} alt="" />
            </div>
            <div className="bolinmalar">
              <img className='ong' src={rasm5} alt="" />
              <h4>AR/ VR design</h4>
              <img src={ong} alt="" />
            </div>
            <div className="bolinmalar">
              <img className='ong' src={rasm6} alt="" />
              <h4>3D Modelings</h4>
              <img src={ong} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mobile
