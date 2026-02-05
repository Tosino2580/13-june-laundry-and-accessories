import React from 'react'
// import Image from '/src/assets/images/MEN/Casual/front-image.webp'
import video from '../assets/video/videoplayer.mp4'
import { Link } from 'react-router-dom'
const Section = () => {
  return (
    <div>
      <div className=' flex flex-col md:relative'>
        {/* <img src={Image} alt="" className=' w-full' /> */}
        <video src={video} autoPlay muted loop playsInline className='w-full h-150 md:h-full object-cover opacity-35'></video>
      </div>
      {/* <div className=' mt-3 md:mt-0 md:absolute md:bottom-[-30vw] md:left-20 text-center md:text-start flex flex-col space-y-5 md:space-y-10'>
        <p className='text-white text-lg md:text-2xl font-bold'>Shop this collection</p>
        <h1 className='text-4xl md:text-8xl w-full text-center md:text-start md:w-1/2 text-white'>Discover This Awesome Fax Collection</h1>
        <Link to={'/collections'}>
        <button className='py-3 px-5 bg-yellow-400 cursor-pointer text-white text-xl font-semibold rounded-md transition-transform duration-300 hover:scale-110'>Shop Now</button>
        </Link>
      </div> */}
    </div>
    
  )
}

export default Section
