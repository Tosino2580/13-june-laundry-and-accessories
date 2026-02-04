import React, { useState } from 'react'
import { ProductData } from '../productData/ProductData'
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='md:px-5'>
            <Link to={`/products/${product.id}`}>

                <div
                    className="relative group w-90 md:w-84   rounded-lag  shadow-lg"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.img
                        src={product.image}
                        alt={product.name}
                        className={`w-50  md:w-full h-70 md:h-120 object-cover transition-transform rounded-xl duration-300 ml-3 md:ml-0`}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isHovered ? 0 : 1, }}
                        transition={{ duration: 0.5, ease: "easeInOut", }}
                    />

                    <motion.img
                        src={product.hoverImage}
                        alt={product.name}
                        className="absolute top-0 left-0 w-50 md:w-full h-70 md:h-120 object-cover rounded-xl ml-3 md:ml-0 "
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 1 }}
                        transition={{ duration: 0.9, ease: "easeInOut", }}
                    />

                    <h3 className='text-sm font-semibold  text-white px-1 bg-red-400 rounded-xl w-10 md:w-13 text-center relative bottom-68 md:bottom-118 left-3 md:left-2 ml-3 md:ml-0'>NEW</h3>

                    <div

                        className={`absolute inset-0 flex flex-col space-y-2  items-center justify-center space-x-4 transition-transform duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <button className="bg-white p-2 rounded-full cursor-pointer shadow-md hover:bg-yellow-500 transition relative left-2 md:left-35 bottom-25 md:bottom-50">
                            <FaEye size={12} className="text-gray-800 hover:text-white " />
                        </button>
                        <button className="bg-white p-2 rounded-full cursor-pointer shadow-md hover:bg-yellow-500 transition relative left- md:left-33 bottom-25  md:bottom-50">
                            <FaShoppingCart size={12} className="text-gray-800 hover:text-white " />
                        </button>
                    </div>
                </div>
            </Link>

            <div className=" bg-black text-white ml-4 md:ml-0">
                <h3 className="text-sm md:text-lg font-semibold uppercase">{product.name}</h3>
                <p className="text-yellow-400 font-[cinzel] font-bold"> ₦{product.price.toLocaleString('en-NG')}</p>
                <Link to={`/product/${product.id}`}></Link>
            </div>
        </div>
    )
}
const ProductList = () => {
    const ProductDatas = ProductData.slice(0, 8); // Display only first 8 products
    return (
        <div className='p-4'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {ProductDatas.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
             <div className="flex justify-center mt-6">
                <Link
                    to="/jalabiya"
                    className="bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                    Show More →
                </Link>
            </div>
        </div>
    )

}

export default ProductList
