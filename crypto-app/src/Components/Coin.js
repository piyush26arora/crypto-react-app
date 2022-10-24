import React from 'react'

const Coin = ({name,image,symbol,price,volume,priceChange,marketcap}) => {
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
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}</p>
            )}
            <p className="coin_marketcap">
              Mkt Cap: ${marketcap.toLocaleString()}
            </p>
            </div>
          </div>
        </div>
    )
}

export default Coin ;
