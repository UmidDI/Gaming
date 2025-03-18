import React from 'react'
import '../style/newshero.css'
import search from '../image/Search.png'
function NewsHero() {
  return (
    <section className='newshero'>
      <div className="container">
        <h4>Home / <span>News</span></h4>
        <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <img src={search} alt="" />
      </div>
    </section>
  )
}

export default NewsHero
