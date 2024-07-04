import './styles/CartList.scss'

import React from 'react'
import { updateQuantity } from '../redux/actions'
import { useDispatch } from 'react-redux'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleQuantityChange = quantity => {
    if (quantity >= 0) {
      dispatch(updateQuantity(item.id, quantity))
    }
  }

  const totalPrice = item.price * item.quantity

  return (
    <>
      <tr className="cart-item">
        <td className="quantity-control">
          <img src="/icons/Tickets.svg" />
          {item.name}
        </td>
        <td>
          <div className="quantity-control">
            <img
              src="/icons/remove.svg"
              onClick={() => handleQuantityChange(item.quantity - 1)}
            />
            <span>{item.quantity}</span>
            <img
              src="/icons/add.svg"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            />
          </div>
        </td>
        <td>QAR {totalPrice.toFixed()}</td>
      </tr>
    </>
  )
}

export default CartItem
