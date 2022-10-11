import React from 'react'
import Cloth from '../app/components/Cloth'


const Women = () => {
  const cloth = [
    {
      id: 1,
      brand: 'Apollo running shot',
      amount: $50.00,
      product: '../../assets/images/product.png'
    },
    {
        id: 1,
        brand: 'Apollo running shot',
        amount: $50.00,
        product: '../../assets/images/product.png'
    },
    {
        id: 1,
        brand: 'Apollo running shot',
        amount: $50.00,
        product: '../../assets/images/product.png'
    },
    {
        id: 1,
        brand: 'Apollo running shot',
        amount: $50.00,
        product: '../../assets/images/product.png'
    },
    {
        id: 1,
        brand: 'Apollo running shot',
        amount: $50.00,
        product: '../../assets/images/product.png'
    },
    {
        id: 1,
        brand: 'Apollo running shot',
        amount: $50.00,
        product: '../../assets/images/product.png'

    },
]

 const clothList = cloth.map(({id, brand, amount, product}) => (
    <Cloth key={id} brand={brand} amount={amount} product={product}/>
 ))
 
  return (
    <div>{clothList}</div>
  )
}

export default Women
