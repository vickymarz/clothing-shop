import React from 'react'
import ProductImage from './ProductImage'

const CartStore = () => {
  return (
    <div>
        <span>
           <h2>My Bag</h2>,
           3 items
        </span>
        <div>
            <ProductImage />
        </div>
    </div>
  )
}

export default CartStore
