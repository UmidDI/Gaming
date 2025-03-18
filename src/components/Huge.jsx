import React from 'react'
import rasm from '../image/Huge Global.png'
import logo from '../image/Group 114.png'
import phone from '../image/Group 67.png'
import loc from '../image/Group 68.png'
import '../style/huge.css'
function Huge() {
  return (
    <section className='huge'>
      <div className="container">
      <img className='map__back' src={rasm} alt="" />
      <div className="loc__img">
        <img className='logo' src={logo} alt="" />
        <img className='loc' src={loc} alt="" />
        <img className='phone' src={phone} alt="" />
      </div>
      </div>
    </section>
  )
}

export default Huge
