import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <div className="bg-[#e3edf6] banner mt-4">
            <div className='container grid md:grid-cols-2 py-8 w-full'>
                <div className='flex items-center'>
                    <div className='max-w-[450px] space-y-4 bg-white p-4 rounded-lg shadow'>
                        <h2 className='text-headingFirst font-bold text-3xl md:text-4xl'>
                            The best mobile phones collection 2024
                        </h2>
                        <h3 className='text-3xl font-semibold '>
                        <span className='text-red-600 font-secondary font-medium'>10% discount</span>    Christmas Special Offers
                        </h3>
                        <a href="#" className='inline-block bg-sky-500 text-white rounded-md px-6 py-3 hover:bg-sky-600 transition-all duration-200'>
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home