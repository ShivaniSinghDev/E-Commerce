
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './assets/Components/Cart'
import Mainpage from './assets/Components/Mainpage'

import Navbar from './assets/Components/Navbar'
import ProductDetails from './assets/Components/ProductsDetails'
import { useState } from 'react'

function App() {
  let [cartProducts, setCartProducts] =  useState ([])
  

  return (
    <>
    <BrowserRouter>
    <Navbar setCartProducts={setCartProducts} cartProducts={cartProducts}/>
    <Routes>
      <Route path='/' element={<Mainpage setCartProducts={setCartProducts} cartProducts={cartProducts}/>}/>
      <Route path='/ProductDetail/:id' element={<ProductDetails setCartProducts={setCartProducts} cartProducts={cartProducts}/>}/>
      <Route path='/Cart' element={<Cart setCartProducts={setCartProducts} cartProducts={cartProducts}/>}/>


    </Routes>
    
    
    
    </BrowserRouter>

  
    </>
  )
}

export default App
