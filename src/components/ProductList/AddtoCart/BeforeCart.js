import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart } from '../../../redux/cartSlice'
import './AddtoCart.css'

const BeforeCart = ({ product }) => {
  const dispatch = useDispatch()
  const cartList = useSelector(state => state.cart.cartList)


  const handleAddCart = () => {
      dispatch(addTocart(product))
  
    }

  return (
    <div className='before-cart'>
        <button onClick={handleAddCart} className='add-cart-button'>Add to cart</button>
    </div>
  )
}

export default BeforeCart