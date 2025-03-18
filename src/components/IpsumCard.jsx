import React from 'react'

function IpsumCard({text, logic, title}) {
  return (
    <section className='ipsumcard'>
      <div className="ipsum__card">
        <button>{text}</button>
        <h4>{logic}</h4>
        <p>{title}</p>
      </div>
    </section>
  )
}

export default IpsumCard
