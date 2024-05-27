import React from 'react'
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart} from "react-icons/ai"


interface propType {
  id: number,
  title: string,
  img: string,
  category: string,
  price: string
}

const ProductCart = ({id, title, img, category, price } : propType) => {
  return (
    <div className='border border-gray-200'>
      <div className='text-center border-b'>
        <img src={img} className='inline-block' alt="frr"/>
      </div>
      <div className='px-8 py-4'>
        <div className='flex justify-center items-center gap-x-8'>
          <p className='text-gray-500 text-sm font-medium'>{category} </p>
          <h2 className="font-medium">
            {title}
          </h2>
        </div>
        <div className='mt-3 flex items-center justify-between text-[#ffb21d] w-[85%]'>
         <div className='flex items-center'>
         <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
         </div>
        </div>
        <p className='text-gray-600 text-sm ml-2'>(3 Review)</p>
      </div>
      <div className='flex w-full justify-center rounded-lg items-center bg-sky-500 text-white mt2 py-2 cursor-pointer'>
        <AiOutlineShoppingCart className=''/> Add to Cart
      </div>
    </div>
  )
}

export default ProductCart
