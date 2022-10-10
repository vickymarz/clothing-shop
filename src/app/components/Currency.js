import React, {useState} from 'react'

const Currency = () => {

    const [option, setOption] = useState('USD $')

    const symbol = option.split(' ')[1]

    const currencySymbol = [
        {
            id: 1,
            coins: 'USD',
            symbol: '$',
        },
        {
            id: 2,
            coins: 'EUR',
            symbol: '@',
        },
        {
            id: 3,
            coins: 'JPY',
            symbol: '#'
        }
    ]

    const currencies = currencySymbol.map(({id, coins, symbol}) => (
      <option key={id} value={`${coins} ${symbol}`}>
        {`${symbol} ${coins}`}
      </option>
    ))

  return (
        <select value={option} onChange={(e) => setOption(e.target.value)}>
           <option value={option}>
             {symbol}
           </option>
           {currencies}
        </select>
  )
}

export default Currency
