import React from 'react'
import Form from '../Form'
import Navbar from '../Navbar/Navbar'
import About from './About'
import Carousel from './Carousel'
import Events from './Events'
import Footer from './Footer'
import Yoga from './Yoga'

const Home = ({update}) => {
  return (
    <div>
        <Navbar/>
       <Carousel/>
       <Yoga/>
       <Events/>
       <About/>
       <Form update={update}/>
       <Footer/>
    </div>
  )
}

export default Home