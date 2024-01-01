import React from 'react'
import Header from './components/Header/Header.jsx'
import Hero  from './components/Hero/Hero'
import Categories from './components/Categorias/Categories'
import CardsProducts from './components/Products/CardsProducts.jsx'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import Section from './components/Section/Section.jsx'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Section />
      {/* <Layout>
       
        <Categories/>
        <CardsProducts/>
      </Layout> */}
      <Footer />
     
    </>
  )
}

export default App