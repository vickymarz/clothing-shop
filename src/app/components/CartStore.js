import React from 'react'
import Button from './Button'
import Counter from './Counter'
import ProductDescriptions from './ProductDescriptions'
import ProductDetails from './ProductDescriptions'
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
            <div>
                <ProductDescriptions />
            <p>size:</p>
        <div>
          <span>XS</span>
          <span>X</span>
          <span>M</span>
          <span>L</span>
        </div>
        <div>
          <p>color:</p>
          <span>
            <input type="color" value='red'/>
          </span>
          <span>
            <input type="color" value='red'/>
          </span>
          <span>
            <input type="color" value='red'/>
          </span>
        </div>
        <div>
          <span>Total</span>
          <span>$200</span>
        </div>
        <div>
        <Button children='VIEW BAG'/>
        <Button children='CHECK OUT'/>
        </div>
            </div>
        </div>
    </div>
  )
}

export default CartStore
