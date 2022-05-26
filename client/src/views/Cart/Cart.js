import React, { useState } from 'react'
// import Nav from '../../components/Nav'
import productOne from '../../assets/images/Product-one.png'
import { useCart } from 'react-use-cart'
import './Cart.css'
import Nav from '../../components/Nav'

const Cart = () => {

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

  const size = [
    {
      id: 1,
      size: 'XS'
    },
    {
      id: 2,
      size: 'S'
    },
    {
      id: 3,
      size: 'M'
    },
    {
      id: 4,
      size: 'L'
    },
  ]

  const color = [
    {
      id: 1,
      colorName: '#D3D2D5'
    },
    {
      id: 2,
      colorName: '#2B2B2B'
    },
    {
      id: 3,
      colorName: '#0F6450'
    }
  ]

  return (
    <div>
      <Nav />
      <div className='cart_wrapper_main'>
        <h2 className='cart_title'>CART</h2>

        {
          items.map((i, index) => {
            return (
              <>
                <div key={index} className='cart_details_main'>
                  <div>
                    <h1 className='cart_details_title cart_details_main_title'>{i.name}</h1>
                    <span className='cart_details_title__span'>{i.category}</span>
                    <h2 className='cart_details_title cart_details_main__price'>{i.price}</h2>
                    <h2 className='cart_details_title cart_details_main__swatch_title'>SIZE:</h2>
                    <div className='cart_details_main__size'>
                      {
                        size.map((size, index) => {
                          return (
                            <p key={index}>{size.size}</p>
                          )
                        })
                      }
                    </div>

                    <h2 className='cart_details_title cart_details_main__swatch_title'>COLOR:</h2>
                    <div className='cart_details_main__color'>
                      {
                        color.map((color, index) => {
                          return (
                            <div key={index}>
                              <p style={{ backgroundColor: `${color.colorName}`, border: 'none' }}></p>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>

                  <div className='cart_image_section_main'>
                    <div className='cart_count_section'>
                      <button
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                      <p className='cart_count_section__count'>
                        {productCount}
                      </p>
                      <button
                        onClick={handleDecrement}
                      >
                        -
                      </button>
                    </div>
                    <div>
                      <img className='cart_product_image' src={i.image} alt='Product One' />
                    </div>
                  </div>
                </div>
              </>
              )
            })
          }

        <div className='cart_total_main'>
          <div>
            <p>
              <span className='cart_total_main__title'>Tax: </span>
              $15.00
            </p>
            <p>
              <span className='cart_total_main__title'>Qty: </span>
              {/* {i.quantity} */}
            </p>
            <p>
              <span className='cart_total_main__title'>Total: </span>
              <p>${cartTotal}</p>
            </p>
          </div>
          <div className='sing_prod_wrapper__button_main'>
            <button onClick={() => alert('Add To Cart')}>ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart