import React, { Component } from 'react'
import './Nav.css'
import Logo from '../assets/images/logo.png'
import Cart from '../assets/images/cart.png'
import Card from './Card'
// import Navigation from '../config/router'
import { Link } from "react-router-dom";

export default class Nav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hidden: true,
            cartItem: []
        }
    }

    handleCard = () => this.setState(() => ({ hidden: !this.state.hidden }))

    render() {
        return (
            <>
                <div className='header'>
                    <nav className='header__nav nav'>
                        <Link to="/">All</Link>
                        <Link to="/clothes">Clothing</Link>
                        <Link to="/technologies">Technologies</Link>
                        {/* <a href="#">All</a> */}
                        {/* <a href="#">Clothing</a> */}
                        {/* <a href="#">Technologies</a> */}
                    </nav>
                    <div>
                        <img src={Logo} alt='logo' />
                    </div>
                    <div>
                        <img
                            src={Cart}
                            alt='cart'
                            onClick={() => this.handleCard()}
                        />
                    </div>
                </div>
                {this.state.hidden ? null : <Card cartItems={this.state.cartItem}/>}
            </>
        )
    }
}