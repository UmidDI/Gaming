import React from 'react'

function BigPropsCard2({kichik, tugma, vaqt, text,}) {
  return (
    <section className='bigpropscard2'>
      <div className="container">
      <div className="mini__props">
                <img src={kichik} alt="" />
                <div className="content__card">
                    <div className="vaqtUU">
                    <button>{tugma}</button><h4>{vaqt}</h4>
                    </div>
                    <h2>{text}</h2>
                </div>
            </div>
      </div>
    </section>
  )
}

export default BigPropsCard2
