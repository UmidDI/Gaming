import React from 'react'
import TeamesCard from './TeamesCard'
import rasm from '../image/Bill 1.png'
import rasm2 from '../image/Beverly 1.png'
import rasm3 from '../image/Claudia 1.png'
import rasm4 from '../image/Avatar 1.png'
import '../style/teames.css'
function Teames() {
  return (
    <section className='teames'>
      <div className="container">
      <h2 className='yetim'>Our Team</h2>
        <div className="team__wrapper">
            <TeamesCard image={rasm} text="John peter" title="COO"/>
            <TeamesCard image={rasm2} text="John peter" title="COO"/>
            <TeamesCard image={rasm3} text="John peter" title="COO"/>
            <TeamesCard image={rasm4} text="John peter" title="COO"/>
        </div>
      </div>
    </section>
  )
}

export default Teames
