import React from 'react'

const ProductImage = ({brand, product, className}) => {
  return (
    <div>
        <img src={product} alt={brand} className={className}/>
    </div>
  )
}

export default ProductImage
