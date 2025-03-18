import React from 'react'
import header__logo from '../image/header_logo.png'
import fb from '../image/fb.png'
import ins from '../image/ins.png'
import tw from '../image/tw.png'
import ine from '../image/in.png'
import '../style/footer.css'
function Footer() {
  return (
    <footer className='footer'>
           <div className="container">
            <div className="footer__wrapper">
            <div className="footer__section">
        <img src={header__logo} alt="" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>@Lorem</p>
      </div>
      <div className="footer__section">
        <h3>About us</h3>
        <ul>
          <li>Zeux</li>
          <li>Portfolio</li>
          <li>Careers</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="footer__section">
        <h3>Contact us</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>+908 89097 890</p>
      </div>
      <div className="social__icons">
         <img src={fb} alt="" />
         <img src={ins} alt="" />
         <img src={tw} alt="" />
         <img src={ine} alt="" />
        </div>
            </div>
           </div>
    </footer>
  )
}

export default Footer
