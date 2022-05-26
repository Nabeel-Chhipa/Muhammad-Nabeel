import { useState, useEffect } from "react";
import productOne from '../../assets/images/Product-one.png'
import Nav from '../../components/Nav'
import { useParams } from "react-router-dom";
import All from "../All/All";
import './SingleProduct.css'
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../gqloperation/queries";
import { useCart } from 'react-use-cart'

const SingleProduct = () =>  {

    const {id} = useParams();
    const { addItem } = useCart()
    // console.log(id)
    const {loading, error, data} = useQuery(GET_PRODUCTS, {
        variables:{
            input:id
        }
    })
    if(loading) return <h3>Loading...</h3>
    if(error) console.log(error)

    const result = data.category.products.filter((i) => {
        return i.id == id
    });
    const {name, category, inStock} = result[0]
    const prices = result[0].prices[0].amount
    let isAtrName = result[0].attributes[0].name

    // {
    //     isAtrName ? null : result[0].attributes[name]
    // }

    // {
    //     isAtrName ? result[0].attributes[0].name : null
    // }
    
    // const AtrValue = result[0].attributes[0].items.map((i) => i.displayValue)
    const desc = result[0].description
    const productMainImage = result[0].gallery[0]
    const productGallery = result[0].gallery.slice(0, 3)
    console.log(productGallery)

    const addToCart = () => {
        addItem({
            id,
            name,
            category,
            price: prices,
            image: productMainImage
        })
    }

        return (
            <>
                <Nav />
                <div className='sing_prod_wrapper'>
                    <div className='sing_prod_wrapper__slider'>
                        {
                            result[0].gallery.slice(0, 3).map((i, index) => {
                                return <img key={index} src={i} alt='Product_One' />
                            })
                        }
                    </div>
                    <div className='sing_prod_wrapper__imag_single'>
                        <img src={productMainImage} alt='Product_One' />
                    </div>
                    <div className='sing_prod_wrapper__contect_section'>    
                        <h2 className='sing_prod_wrapper__product_title'>{name}</h2>
                        <p>{category}</p>

                        {
                            isAtrName ?
                        <div className='sing_prod_wrapper__size_main'>
                            <h2>{isAtrName}</h2>
                            <div className='sing_prod_wrapper__size'>
                                {
                                    result[0].attributes[0].items.map((i, index) => {
                                        return (
                                            <p key={index} style={{ backgroundColor: `${i.value}`}}>{i.displayValue}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                            :
                            null
                        }

                        <div className='sing_prod_wrapper__price_main'>
                            <h2>PRICE:</h2>
                            <p>{prices}</p>
                        </div>

                        <div className='sing_prod_wrapper__button_main'>
                            <button onClick={addToCart}>ADD TO CART</button>
                        </div>

                        <div className='sing_prod_wrapper__desc_main'>
                            <p>{
                                `${result[0].description}`
                            }
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default SingleProduct