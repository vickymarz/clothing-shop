import React from 'react'
import Counter from './Counter'
import ProductDetails from './ProductDetails'
import ProductImage from './ProductImage'

const CartStore = () => {
  return (
    <div>
        <span>
           <h2>My Bag</h2>,
           3 items
        </span>
        <div>
            <ProductDetails />
            <span>
                <Counter />
                <ProductImage />
            </span>
        </div>
    </div>
  )
}

export default CartStore
