import React, {useState} from 'react'

const Currency = () => {

    const [option, setOption] = useState('$')
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
      <option key={id} value={`${symbol} ${coins}`} />
    ))

  return (
    <div>
        <select value={option} onChange={(e) => setOption(e.target.value)}>
           {currencies}
        </select>
    </div>
  )
}

export default Currency
