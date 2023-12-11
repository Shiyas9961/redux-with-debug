import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from '../../../redux/cartSlice'
import './AddtoCart.css'


const AfterCart = ({count, productId}) => {

  const dispatch = useDispatch()

  console.log(productId)

  const handleIncrement = () => {
    dispatch(increment(productId))
  }

  const handleDecrement = () => {
    dispatch(decrement(productId))
  }

  return (
    <div className='after-cart'>
      <button onClick={handleDecrement} className='cart-counter-button'>-</button>
      <div className="cart-count">{count}</div>
      <button onClick={handleIncrement} className='cart-counter-button'>+</button>
    </div>
  )
}

export default AfterCart