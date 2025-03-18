import React from 'react'
import '../style/bigprops.css'
import BigPropsCard from './BigPropsCard'
import BigPropsCard2 from './BigPropsCard2'
import rasm274 from '../image/Rectangle 274.png'

import rasm2741 from '../image/Rectangle 274 (1).png'
import rasm2761 from '../image/Rectangle 276.png'
import rasm2762 from '../image/Rectangle 276 (1).png'
import rasm2763 from '../image/Rectangle 276 (2).png'
import rasm2764 from '../image/Rectangle 276 (3).png'
import rasm2765 from '../image/Rectangle 276 (4).png'
import rasm2766 from '../image/Rectangle 276 (5).png'
import rasm2767 from '../image/Rectangle 276 (6).png'
function BigProps() {
  return (
    <section className='bigprops'>
      <div className="container">
        <div className="bigprops__wrapper">
          <div className="big__wrapper">
          <BigPropsCard rasm={rasm274} tugma="John smash" vaqt=".5min" text="Lorem Ipsum is simply dummy text dummy text " title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," tema="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "/> 
          <BigPropsCard rasm={rasm2741} tugma="John smash" vaqt=".5min" text="Lorem Ipsum is simply dummy text dummy text " title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," tema="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "/> 
          </div>
           <div className="mini__wrapper">
           <BigPropsCard2 kichik={rasm2761} tugma="John smash" vaqt=".5min" text="Lorem Ipsum is simply dummy text dummy text ? "/> 
           <BigPropsCard2 kichik={rasm2762} tugma="John smash" vaqt=".5min" text="Lorem Ipsum is simply dummy text dummy text ? "/> 
           <BigPropsCard2 kichik={rasm2763} tugma="John smash" vaqt=".5min" text="Lorem Ipsum is simply dummy text dummy text ? "/> 
           <BigPropsCard2 kichik={rasm2764} tugma="John smash" vaqt=".5min" text="Lorem Ipsum is simply dummy text dummy text ? "/> 
           <BigPropsCard2 kichik={rasm2765} tugma="John smash" vaqt=".5min" text="Lorem Ipsum is simply dummy text dummy text ? "/> 
           <BigPropsCard2 kichik={rasm2766} tugma="John smash" vaqt=".5min" text="Lorem Ipsum is simply dummy text dummy text ? "/> 
           <BigPropsCard2 kichik={rasm2767} tugma="John smash" vaqt=".5min" text="Lorem Ipsum is simply dummy text dummy text ? "/> 
           </div>
        </div>
      </div>
    </section>
  )
}

export default BigProps
