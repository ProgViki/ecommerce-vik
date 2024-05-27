import React from 'react'
import { useAppDispatch } from '../redux/hooks'
import { RxCross1 } from 'react-icons/rx'
import { addToCart } from '../redux/slice/cartSlice'


interface propType {
    id: number,
    title: string,
    name: string,
    price: number,
    quantity: number,
    img: string
}

const CartProduct = ({id, img, title, price, quantity}: propType) => {

  const dispatch = useAppDispatch()

  const addProductToCart =() =>{
    const payload ={
        id, img, title, price: parseFloat(price), quantity:1
    }
    dispatch(addToCart(payload))
    toast.success("Added to cart successfully")
  }
  const newPrice = Math.ceil(price * 0.9)
  return (

    <div className='flex justify-between items-center'>
      <div className='text-center border-b border-gray-200'>
        <img src={img} alt="" className='inline-block'/>
        <div className='space-y-2'>
            <h2 className='font-medium'>{title}</h2>
            <p className='text-gray-600 text-sm'>{quantity} * {newPrice}
            </p>
        </div>
      </div>
      <RxCross1 className='cursor-pointer' />
    </div>
  )
}

export default CartProduct
