import React from 'react'
import HomeHero from '../components/HomeHero'
import Games from '../components/Games'
import Spider from '../components/Spider'
import Mobile from '../components/Mobile'
import Recen from '../components/Recen'
import Promice from '../components/Promice'
function HomePage() {
  return (
    <main>
      <HomeHero/>
      <Games/>
      <Spider/>
      <Mobile/>
      <Recen/>
      <Promice/>
    </main>
  )
}

export default HomePage
