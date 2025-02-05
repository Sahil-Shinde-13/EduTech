import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Faq from './Components/Faq/Faq'

const App = () => {

  const [playState,setPalyState] = useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title  subTitle='Our PRGRAM' title='What We Offer' />
      <Programs/>
      <About setPalyState={setPalyState}/>
      <Title  subTitle='Gallery' title='Campus Photos' />
      <Campus/>
      <Title  subTitle='TESTIMONIALS' title='What student says' />
      <Testimonial/>
      <Title  subTitle='Contact Us' title='Get in Touch' />
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPalyState={setPalyState}/>
    </div>
  )
}

export default App