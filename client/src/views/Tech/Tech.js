import { useQuery } from '@apollo/client'
import React from 'react'
import Nav from '../../components/Nav'
import { GET_TECH_PRODUCT } from '../../gqloperation/queries'
import './Tech.css'
import { useNavigate } from 'react-router-dom'

const Technologies = () => {
  const navigate = useNavigate()

  const { loading, error, data } = useQuery(GET_TECH_PRODUCT)

  if (loading) return <h1>Loading...</h1>
  if (error) {
    console.log(error.message)
  } 

  return (
    <div className='category'>
        <Nav />
        <div className='category__main_section'>
          <h2 className='category__name'>Technologies</h2>
          <div className='product_wrapper'>
          {
            data.category.products.map((product, index) => {
              return (
                <div className='product_card' key={index} onClick={() => navigate(`/singleProduct/${product.id}`)}>
                  <img className='product_card__image' src={product.gallery[0]} alt={product.name} />
                  <h2 className='product_card__title'>{product.name}</h2>
                  <p className='product_card__price'>{product.prices[0].amount}</p>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  )
}

export default Technologies