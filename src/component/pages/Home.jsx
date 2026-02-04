import React from 'react'
import Section from '../Section'
import Arrival from '../Arrival'
import ProductList from '../ProductList'
// import Button from '../../Button'
import Story from '../Story'
import CategoryCarousel from '../CategoryCarousel'
import ProductList2 from '../ProductList2'

const Home = () => {
  return (
    <div className='overflow-hidden font-["Crimson+Pro"]'>
     <Section/>
     <Arrival/>
     <ProductList/>
     <ProductList2/>
     {/* <Button/> */}
     <Story/>
     <CategoryCarousel/>
     
    </div>
  )
}

export default Home
