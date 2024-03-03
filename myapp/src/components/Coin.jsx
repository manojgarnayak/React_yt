import React from 'react'


const Coin = ({name, symbol, imgSRC, price}) => {
  return (
    <div className='coin'>
      <img src= {imgSRC} alt={name} />
      <h1>{symbol}</h1>
      <p>{name}</p>
      <h3>₹ {price}</h3>
    </div>
  )
}

export default Coin