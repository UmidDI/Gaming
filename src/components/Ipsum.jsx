import React from 'react'
import IpsumCard from './IpsumCard'
import '../style/ipsum.css'
function Ipsum() {
  return (
    <section className='ipsum'>
      <div className="container">
      <h2 className='whay'>Why work with us</h2>

        <div className="ipsum__wrapper">
        <IpsumCard text="Lorem ipsum" logic="Lorem ipsum" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
        <IpsumCard text="Lorem ipsum" logic="Lorem ipsum" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
        <IpsumCard text="Lorem ipsum" logic="Lorem ipsum" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
        </div>
      </div>
    </section>
  )
}

export default Ipsum
