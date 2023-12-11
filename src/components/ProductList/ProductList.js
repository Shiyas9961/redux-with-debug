import React from 'react'
import products from '../../api/productsapi.json'
import './ProductList.css'
import CartButtons from './AddtoCart/CartButtons'

const ProductList = () => {

  return (
    <section className='container'>
        {
            products.map(item => {
                return (
                    <div key={item?.id} className='product-container'>
                        <img src={item?.image} alt={item.title} />
                        <h3>{item?.title}</h3>
                        <CartButtons product={item}/>
                    </div>
                )
            })
        }
    </section>
  )
}

export default ProductList