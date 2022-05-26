import {
    Routes,
    Route
} from 'react-router-dom'
import React, { Component } from 'react'
import All from '../views/All/All'
import Clothing from '../views/Clothes/Clothes'

export default class Navigation extends Component {
  render() {
    return (
        <Routes>
            <Route path='/all' element={<All />}/>
            <Route path='/clothing' element={<Clothing />}/>
        </Routes>
    )
  }
}
