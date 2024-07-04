import './styles/CartTotal.scss'

import React from 'react'
import { useSelector } from 'react-redux'

const Box = () => {
  const totalPrice = useSelector(state => state.totalPrice)
  return (
    <div className="box">
      <div className="box__header">
        <img src="/icons/Kid.png" alt="Image Description" />
        <h2 className="box__title">Total Cart Value</h2>
      </div>
      <div className="box__content">
        <div className="box__item">
          Cart value <span>QAR {totalPrice}</span>
        </div>
        <div className="box__item">
          Discounts <span>0</span>
        </div>
        <div className="box__border">
          <p className="box__total">
            Total <span>QAR {totalPrice}</span>
          </p>
        </div>
      </div>
      <button className="box__button">
        Continue
        <img src="/icons/arrow-right.svg" width={15} />
      </button>
    </div>
  )
}

export default Box
