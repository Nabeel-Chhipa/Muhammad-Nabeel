import './Card.css'
import CartItem from '../views/Cart/Cart'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import React, { useState } from 'react'

const Card = ({ cartItems }) => {

  const [productCount, setproductCount] = useState(0)
  const { isEmpty, items, cartTotal } = useCart()
  if (isEmpty) return <p>Your cart is empty</p>
  if (items) console.log(items)

  const handleIncrement = () => {
    setproductCount(productCount + 1)
  }

  const handleDecrement = () => {
    {
      productCount <= 0 ? alert('Product must be grater than 0')
        :
        setproductCount(productCount - 1)
    }
  }

return(
  <div className="cart-dropdown">
    <div className='mini-cart-price-wrapper'>
      <p>Total</p>
      <p>$200.00</p>
    </div>
    <div className='mini-cart-btn-group'>
      <div className='sing_prod_wrapper__button_main'>
        <Link to='/cart'>
          <button style={{padding: '10px'}}>VIEW BAG</button>
        </Link>
      </div>
      <div className='sing_prod_wrapper__button_main'>
        <button style={{padding: '10px'}} onClick={() => alert('Check Out')}>CHECK OUT</button>
      </div>
    </div>
  </div>
)
};

export default Card