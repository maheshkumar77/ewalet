import React from 'react'
import About from './About'
import Contact from './Contact'
import Service from './Service'
//import Contact from './Contact'
import './style/home.css'
function Home(prop) {
  return (
    <div>
    <div className='home'>
      <div className='con'>
      <h1> Hii i am {prop.name}</h1>
      <h2>{prop.data}</h2>
      </div>
      <div className='img'>
        <h1>hii its ima</h1>
      </div>
      </div>
     <About />
     <Contact />
     <Service />
    
    </div>
  )
}

export default Home
