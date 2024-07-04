import './styles/CartList.scss'

import CartItem from './CartItem'
import React from 'react'
import { useSelector } from 'react-redux'

const CartList = () => {
  const cart = useSelector(state => state.cart)

  return (
    <div className="cart-list-container">
      <h1>
        <img src="/icons/cart.svg" alt="Cart Icon" />
        Cart Summary
      </h1>
      <table className="cart-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <div className="input-group">
        <img src="/icons/Tickets.svg" alt="Tickets Icon" />
        <input type="text" placeholder="Enter Discount code" />
        <button>Add</button>
      </div>
    </div>
  )
}

export default CartList
