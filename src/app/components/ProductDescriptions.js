import React from 'react'

const ProductDescriptions = ({brand, amount}) => {
  return (
    <div>
        <p>{brand}</p>
        <p>{amount}</p>
    </div>
  )
}

export default ProductDescriptions
