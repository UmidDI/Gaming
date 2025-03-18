import React from 'react'
import '../style/miya.css'
import rasm from '../image/girl_ai.png'
function Miya() {
  return (
    <section className='miya'>
      <div className="container">
       <div className="miya__wrapper">
       <img src={rasm} alt="" />
        <div className="miya__text">
            <h4>Lorem ipsum</h4>
            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
       </div>
      </div>
    </section>
  )
}

export default Miya
