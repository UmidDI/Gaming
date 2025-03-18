import React from 'react'
import '../style/recen.css'
import rasm1 from '../image/gamer birinchi (1).png'
import rasm2 from '../image/gamer ikki.png'
import rasm3 from '../image/gamer uch.png'
import rasm4 from '../image/gamer tort.png'
import rasm5 from '../image/gamer besh.png'
import rasm6 from '../image/gamer ollti.png'
function Recen() {
  return (
    <section className='recen'>
      <div className="continer">
       <div className="recen__text">
       <h2>Our Recent Projects</h2>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. </p>
       </div>
       <div className="recen__wrapper">
        <img src={rasm1} alt="" />
        <img src={rasm2} alt="" />
        <img src={rasm3} alt="" />
        <img src={rasm4} alt="" />
        <img src={rasm5} alt="" />
        <img src={rasm6} alt="" />
       </div>
       <button>SEE ALL</button>
      </div>
    </section>
  )
}

export default Recen
