import React from 'react'
import '../style/homehero.css'
import joys from '../image/joy_stick 1.png'
import rasm1 from '../image/unity 1.png'
import rasm2 from '../image/unreal 1.png'
import rasm3 from '../image/cry 1.png'
import rasm4 from '../image/2be034e.jpg'
import rasm5 from '../image/company_unity.png'
function HomeHero() {
  return (
    <section  className='homehero'>
      <div className="container">
        <div className="homerhero__wrapper">
            <div className="homerhero__content">
                <h3>3D game Dev </h3>
                <h2>Work that we produce for our clients</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                <button>Get more details</button>
            </div>
            <div className="joys">
            <img src={joys} alt="" />
            </div>
                <img className='wer1' src={rasm1} alt="" />
                <img className='wer2' src={rasm2} alt="" />
                <img className='wer3' src={rasm3} alt="" />
                <img className='wer4' src={rasm4} alt="" />
                <img className='wer5' src={rasm5} alt="" />
        </div>
      </div>
    </section>
  )
}

export default HomeHero
