import React from 'react'

function BigPropsCard({rasm, tugma, vaqt, text, title, tema, }) {
  return (
    <section className='bigpropscard'>
            <div className="container">
            <div className="big__props">
                    <img src={rasm} alt="" />
                    <div className='tugmaUU'><button>{tugma}</button><h4>{vaqt}</h4></div>
                    <h2>{text}</h2>
                    <p>{title}</p>
                    <p>{tema}</p>
            </div>
      </div>
    </section>
  )
}

export default BigPropsCard
