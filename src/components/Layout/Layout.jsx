import Header from "../Header/Header"
import Hero from "../Hero/Hero"
import Section from "../Section/Section"
import CardsProducts from "../Products/CardsProducts"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"

function Layout() {
  return (<>
      <Header />
      <Outlet></Outlet>
      <Hero />
      <Section />
      {/* <Layout>
       
        <Categories/>
        <CardsProducts/>
      </Layout> */}
      <Footer /></>

  )
}

export default Layout