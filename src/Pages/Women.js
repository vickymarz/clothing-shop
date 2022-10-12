import React from 'react'
import Cloth from '../app/components/Cloth'
import clothImg from '../assets/images/product.png'


const Women = () => {
  const cloth = [
    {
      id: 1,
      brand: 'Apollo running shot',
      amount: '$50.00',
      product: clothImg
    },
    {
        id: 2,
        brand: 'Apollo running shot',
        amount: '$50.00',
        product: clothImg
    },
    {
        id: 3,
        brand: 'Apollo running shot',
        amount: '$50.00',
        product: clothImg
    },
    {
        id: 4,
        brand: 'Apollo running shot',
        amount: '$50.00',
        product: clothImg
    },
    {
        id: 5,
        brand: 'Apollo running shot',
        amount: '$50.00',
        product: clothImg
    },
    {
        id: 6,
        brand: 'Apollo running shot',
        amount: '$50.00',
        product: clothImg

    },
]

 const clothList = cloth.map(({id, brand, amount, product}) => (
    <Cloth key={id} brand={brand} amount={amount} product={product}/>
 ))

  return (
    <>
      <div>{clothList}</div>
    </>
  )
}

export default Women
