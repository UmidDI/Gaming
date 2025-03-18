import React from 'react'
import '../style/hello.css'
function Hello() {
  return (
    <section className='hello'>
      <div className="container">
        <div className="hello__wrapper">
           <div className="hello__text">
           <h2>Say hello</h2>
           <p>Lorem Ipsum is simply dummy text of the printing .</p>
           </div>
           <div className="hello__input">
           <div className="form-container">
      <div className="input-group">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="email" placeholder="Email Address" className="full-widt" />
      <textarea  placeholder="Message" className="full-width"></textarea>
    </div>
           </div>
           <button className="submit-btn">Get in touch</button>
        </div>
      </div>
    </section>
  )
}

export default Hello
