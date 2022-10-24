import React from 'react'

const Coin = ({name,image,symbol,price,volume}) => {
    return (
        <div classname="coin-container">
          <div classname="coin-row">
            <div classname="coin">
              <img src={image} alt="crypto" />
              <h1>{name}</h1>
              <p classname="coin-symbol">{symbol}</p>
            </div>

            <div classname="coin-data">
              <p classname="coin-price">${price}</p>
              <p classname="coin-volume">${volume.toLocaleString()}</p>
            
            </div>
          </div>
        </div>
    )
}

export default Coin ;
