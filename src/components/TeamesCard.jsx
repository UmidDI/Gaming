import React from 'react'

function TeamesCard({text, image, title}) {
  return (
    <section className='teamcard'>
      <div className="container">
      <div className="our__card">
      <img src={image} alt="" />
      <h3>{text}</h3>
      <h4>{title}</h4>
      </div>
      </div>
    </section>
  )
}

export default TeamesCard
