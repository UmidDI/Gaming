import { NavLink, useLocation } from 'react-router-dom'
import React, { useRef } from 'react'
import '../style/header.css'
import logo from '../image/header_logo.png'
import janobX from '../image/Arrow right.png'
function Header() {
  let location = useLocation()
    let modal = useRef()
    function openModal(){
       modal.current.classList.add("show_modal")
    }
    function closeModal(){
        modal.current.classList.remove("show_modal")
    }
  return (
    <header className='header'>
      <div ref={modal} className="modal">
        <button onClick={closeModal} className='modal__close'><img src={janobX} alt="9292FF" /></button>
        <ul className='modal__link'>
            <li><NavLink onClick={closeModal} to="/about">About</NavLink></li>
            <li><NavLink onClick={closeModal} to="/news">news</NavLink></li>
            <li><NavLink onClick={closeModal} to="/service">service</NavLink></li>
            <li><NavLink onClick={closeModal} to="/contact">contact</NavLink></li>
        </ul>
        </div>
        <div className="header__wrapper">
        <button onClick={openModal} className='header__menu'>MENU</button>
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <div className="header__text">
            <ul className='onaboshi'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About us</NavLink></li>
              <li><NavLink to="/service">Portfolio</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
              <button><NavLink to="/contact">Contact us</NavLink></button>
            </ul>
          </div>
        </div>
    </header>
  )
}

export default Header
