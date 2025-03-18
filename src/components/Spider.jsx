import React from 'react'
import spiderMan from '../image/spiderMan.png'
import nuqtalar from '../image/nuqtalar_toplami.png'
import '../style/Spider.css'
function Spider() {
  return (
    <section className='spider'>
      <div className="container">
        <div className="spider__wrapper">
            <div>
                <h3>Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s,</p>
            </div>
            <img className='spider__img' src={spiderMan} alt="" />
            <div className="nuqtalar__toplami">
                <img src={nuqtalar} alt="" />
                <img src={nuqtalar} alt="" />
                <img src={nuqtalar} alt="" />
                <img src={nuqtalar} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Spider
