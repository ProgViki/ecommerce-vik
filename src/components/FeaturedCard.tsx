import React from 'react'

interface propType {
    icon: React.ReactNode,
    title: string,
    desc: string

}

const FeaturedCard = ({ icon, title, desc}: propType) => {
  return (
    <div className='flex items-center gap-2 bg-gray-100 px-4 py-6'>
        {icon}
        <div>
            <h2 className='font-bold text-xl'>{title}</h2>
            <p className='text-gray-600'>{desc}</p>
        </div>
    </div>
  )
}

export default FeaturedCard