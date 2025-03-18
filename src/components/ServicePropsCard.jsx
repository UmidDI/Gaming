import React from 'react'

function ServicePropsCard({rasm, title, text, link, top, teskari}) {
  return (
    <section className=''>
      <div className={teskari ? 'banner teskari' : "banner"}>
        <div className="banner__text">
        {top && <h2>{top}</h2>}
        <h4>{text}</h4>
        <p>{title}</p>
        <button>{link}</button>
        </div>
      <div className="banner__img">
        <img src={rasm} alt="" />
      </div>
      </div>
    </section>
  )
}

export default ServicePropsCard
