import React from 'react'
import ShowRoom from '/src/assets/images/Laundry/Laundry.jpeg'
const Story = () => {
    return (
        <div className='px-10 py-10 space-y-8'>
            <div className='text-center py-10'>
                <h1 className='text-white text-4xl font-bold'>Our Laundry Service</h1>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-6 md:gap-25'>
                <div className='md:w-1/2 space-y-6 flex flex-col'>
                    <h1 className='text-white text-xl  md:text-4xl font-light'>At <b className='text-2xl uppercase'>13 June Laundry Service</b>, we make caring for your clothes simple, fast, and stress-free. Our mission is to deliver spotless cleaning with the highest level of professionalism, so you can focus on the things that matter most.</h1>
                    <a href="/collections">
                    <button className='text-white hidden md:block px-10 py-3 cursor-pointer rounded-4xl text-xl bg-blue-900'>Contact us</button>
                    </a>
                </div>
                <div>
                    <img src={ShowRoom} alt="" className='rounded-lg h-[600px] w-[500px] md:w-[600px] md:h-[800px]' />
                </div>
                <a href="/laundry">
                 <button className='text-white block md:hidden px-10 py-3 cursor-pointer rounded-4xl text-xl bg-blue-900'>Contact us</button>
                 </a>
            </div>
        </div>
    )
}

export default Story
