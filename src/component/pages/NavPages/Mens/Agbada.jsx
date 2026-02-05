import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
// import Footer from '../../../Footer';
import { agbadaDatas } from '../../../../productData/agbadaDatas';


const AgbadaData = ({ product }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='md:px-5'>
      <Link to={`/agbada/${product.id}`}>
        <div
          className="relative group w-90 md:w-84   rounded-lg  shadow-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className={`w-100  md:w-full h-120 md:h-120 object-cover transition-transform rounded-xl duration-300 `}
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1, }}
            transition={{ duration: 0.5, ease: "easeInOut", }}
          />

          <motion.img
            src={product.hoverImage}
            alt={product.name}
            className="absolute top-0 left-0 w-full h-120 object-cover rounded-xl"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 1 }}
            transition={{ duration: 0.9, ease: "easeInOut", }}
          />

          <h3 className='text-sm font-semibold  text-white px-1 bg-red-400 rounded-xl w-13 text-center relative bottom-118 left-2'>NEW</h3>

          <div

            className={`absolute inset-0 flex flex-col space-y-2  items-center justify-center space-x-4 transition-transform duration-300 ${isHovered ? "opacity-100" : "opacity-0"
              }`}
          >
            <button className="bg-white p-4 rounded-full cursor-pointer shadow-md hover:bg-gray-100 transition relative left-38 md:left-35 bottom-45">
              <FaEye size={15} className="text-gray-800 " />
            </button>
            <button className="bg-white p-4 rounded-full cursor-pointer shadow-md hover:bg-gray-100 transition relative left-36 md:left-33 bottom-45">
              <FaShoppingCart size={15} className="text-gray-800" />
            </button>
          </div>
        </div>
      </Link>

      <div className=" bg-black text-white ml-4 md:ml-0">
        <h3 className="text-sm md:text-lg font-semibold uppercase">{product.name}</h3>
        <p className="text-yellow-300">₦{product.price.toLocaleString('en-NG')}</p>
      </div>
    </div>
  )
}

const Agbada = () => {
  return (
    <div className='bg-black mt-23 z-10 pt-10'>
      <div className='space-y-7'>
        <h1 className='text-white text-5xl text-center '>Bags</h1>
        <div className='flex items-center justify-center gap-5'>
          <Link to={'/'} className='text-white'>Home</Link> <FaChevronRight className='text-white w-2' /> <span className='text-white'>Bags</span>
        </div>
      </div>

      <div className="grid grid-col md:grid-cols-4 gap-5 p-4 mt-25">
        {agbadaDatas.map((product) => (
          <AgbadaData key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  )
}

export default Agbada
