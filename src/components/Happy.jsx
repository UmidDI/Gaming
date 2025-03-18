import React from 'react'
import '../style/happy.css'
import avatar from '../image/robert.png'
import avatar1 from '../image/christy.png'
import avatar2 from '../image/kim.png'
import star from '../image/star.png'
function Happy() {
  return (
    <section className='happy'>
      <div className="container">
        <div className='happy__text'>
            <h2>Trusted by Thousands of Happy Customer</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
        </div>
        <div className="happy__wrapper">
            <div className="happy__card">
                <div className="happy__img">
                    <img src={avatar} alt="" />
                    <img src={star} alt="" />
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="happy__card">
                <div className="happy__img">
                    <img src={avatar1} alt="" />
                    <img src={star} alt="" />
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>
            <div className="happy__card">
                <div className="happy__img">
                    <img src={avatar2} alt="" />
                    <img src={star} alt="" />
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Happy
