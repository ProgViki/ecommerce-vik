import React from 'react'

const Banner = () => {
  return (
    <div className='container mt-32 w-full'>
      <div className='flex items-center justify-center w-full'>
        <div className='h-[200px] md:h-[260px] banner2 bg-cover bg-center w-full rounded-xl p-8 md:p-16'>
            <p className="text-xl text-white font-medium">Smart Phone Pro 2024</p>
            <a href="#" className='mt-6 bg-sky-500 text-white flex items-center justify-center
            w-[120px] h-[40px] hover:text-sky-500 hover:bg-white transition-all duration-200 font-medium'>
                Shop Now
            </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
