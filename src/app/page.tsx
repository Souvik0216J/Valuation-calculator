"use client"
import React, { useState } from 'react'

function Home() {
  const [valuaTion, setValuation] = useState('')
  const [amount, setAmount] = useState('');
  const [equity, setEquity] = useState('');
  
  const submiHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const calculation = () => {
    const a = parseFloat(amount)
    const e = parseFloat(equity)

    const v = a / (e/100)

    if (v >= 10000000) {
      setValuation(`${(v / 10000000).toFixed(2)} Crore`)
    } else if (v >= 100000) {
      setValuation(`${(v / 100000).toFixed(2)} Lakh`)
    } else if (v >= 1000) {
      setValuation(`${(v / 1000).toFixed(2)} Thousand`)
    }

  }

  const clear = () =>{
    setValuation("")
    setAmount("")
    setEquity("")
  }

  return (
    <div className='h-screen w-screen bg-gray-800 flex justify-center items-center'>
      <div className='w-auto h-auto p-3 border border-gray-500 rounded-lg'>

        <form onSubmit={(e) => {
          submiHandler(e)
        }}>
          <input type="text"
            className='block m-2 p-2 rounded-lg w-[250px]'
            placeholder='Amount of funding'
            onChange={(e) => setAmount(e.target.value)}
          />
          <input type="text"
            className='block m-2 p-2 rounded-lg w-[250px]'
            placeholder='Equity (%)'
            onChange={(e) => setEquity(e.target.value)}
          />

          <input type="text"
            className='block m-2 p-2 rounded-lg w-[250px] bg-gray-50'
            placeholder='Valuation'
            disabled={true}
            value={valuaTion}
          />

          <button onClick={calculation} className='m-2 p-2 bg-green-500 py-1 px-2 w-[115px] rounded-lg text-white font-bold hover:bg-green-600'>Calculate</button>
          <button onClick={clear} type="reset" className='m-2 p-2 bg-red-500 py-1 px-2 w-[120px] rounded-lg text-white font-bold hover:bg-red-600'>Reset</button>
        </form>
      </div>
    </div>
  )
}

export default Home
