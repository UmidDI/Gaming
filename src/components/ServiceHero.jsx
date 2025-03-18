import React from 'react'
import user from '../image/user.png'
import location from '../image/location.png'
import server from '../image/Server.png'
import '../style/serverhero.css'
function ServiceHero() {
  return (
    <section className='servicehero'>
      <div className="container">
        <div className="service__wrapper">
          <div className="service__text">
            <h4> Home / <span>Services</span></h4>
            <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
          <div className="service__jadval">
            <div className="service__card">
              <img src={user} alt="" />
              <div>
                <h3>90+</h3>
              <h4>Clients</h4>
              </div>
            </div>
            <div className="service__card">
              <img src={location} alt="" />
              <div>
                <h3>30+</h3>
              <h4>Countries</h4>
              </div>
            </div>
            <div className="service__card">
              <img src={server} alt="" />
              <div>
                <h3>50+</h3>
              <h4>Projects</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
