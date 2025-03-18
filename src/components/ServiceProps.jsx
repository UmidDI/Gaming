import React from 'react'
import rasm from '../image/suniy_girs.png'
import rasm1 from '../image/girl_ai.png'
import rasm2 from '../image/robotai.png'
import ServicePropsCard from './ServicePropsCard'
import '../style/banner.css'
function ServiceProps() {
  return (
    <section className='ServiceProps'>
     <div className="container">
     <ServicePropsCard top="Lorem Ipsum is simply dummy 
text dummy text " text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " link="Read more" rasm={rasm}/>
     <ServicePropsCard teskari={true} top="Lorem Ipsum is simply dummy 
text dummy text " text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " link="Read more" rasm={rasm1}/>
     <ServicePropsCard top="Lorem Ipsum is simply dummy 
text dummy text " text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " link="Read more" rasm={rasm2}/>
     </div>
    </section>
  )
}

export default ServiceProps
