import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
import Header from './components/Header/Header'
import CardsProducts from './components/Products/CardsProducts'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import CartIcon from './components/Cart/CartIcon'
import ContactForm from './components/ContactForm/ContactForm'
import VerifyCode from './components/VerifyCode/VerifyCode'
import Register from './components/Register/Register'
import About from './components/About/About'

function App() {
  return (
    <BrowserRouter>
       <Header/>
        <CartIcon />
     <Cart />
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='products' element={<CardsProducts/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='verify' element={<VerifyCode/>} />
        <Route path='contact' element={<ContactForm/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
      
    </BrowserRouter>
  )
}

export default App