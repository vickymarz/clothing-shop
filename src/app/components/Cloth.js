import React from 'react'

const Cloth = ({brand, amount, product}) => {
  return (
    <div>
        <img src={product} alt={brand} />
        <div>
            <p>{product}</p>
            <p>{amount}</p>
        </div>
    </div>
  )
}

export default Cloth
