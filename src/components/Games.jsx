import React from 'react'
import survival from '../image/survival.png'
import ekshan from '../image/ekshan.png'
import magic from '../image/magic.png'
import animations from '../image/animation.png'
import fire from '../image/fire 1.png'
import '../style/games.css'
function Games() {
  return (
    <section className='games'>
      <div className="container">
        <div className="games__wrapper">
        <div className="see_all">
            <h3>Currently Trending Games</h3>
            <button>SEE ALL</button>
        </div>
        <div className="turlari">
            <div className="survival">
                <img className='other' src={survival} alt="" />
                <h4><img src={fire} alt="" />40 Followers</h4>
            </div>
            <div className="survival">
                <img className='other' src={magic} alt="" />
                <h4><img src={fire} alt="" />40 Followers</h4>
            </div>
            <div className="survival">
                <img className='other' src={ekshan} alt="" />
                <h4><img src={fire} alt="" />40 Followers</h4>
            </div>
            <div className="survival">
                <img className='other' src={animations} alt="" />
                <h4><img src={fire} alt="" /> 40 Followers</h4>
            </div>
        </div>
        <h2>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</h2>
        </div>
      </div>
    </section>
  )
}

export default Games
