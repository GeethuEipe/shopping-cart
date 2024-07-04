import './styles/ShoppingCart.scss'

import CartList from './CartList'
import CartTotal from './CartTotal'
import React from 'react'

const ShoppingCart = () => {
  return (
    <div className="shopping-cart-container">
      <h1>Booking Summary</h1>
      <div className="shopping-cart">
        <CartList />
        <CartTotal />
      </div>
    </div>
  )
}

export default ShoppingCart
