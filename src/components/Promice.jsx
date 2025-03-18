import React from 'react'
import '../style/promice.css'
function Promice() {
  return (
    <section className='promice'>
      <div className="container">
        <div className="promice__wrapper">
            <div className="only__text">
            <h2>Lorem Ipsum</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. </p>
            </div>
            <div className="only__card">
                <div className="chek">                <h2>Stay in the loop</h2>
                <p>Subscribe to receive the latest news and updates about TDA. <br />
                We promise not to spam you! </p></div>
                <form action="">
                <input type="text" />
                <button>Continue</button>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Promice
