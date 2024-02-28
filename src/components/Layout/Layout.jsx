import Hero from "../Hero/Hero"
import Section from "../Section/Section"
import CardsProducts from "../Products/CardsProducts"
import Footer from "../Footer/Footer"
import Featured from "../Featured/Featured"
import ScrollReveal from "scrollreveal"

function Layout() {

  return (<>
      <Hero />
      {/* <Featured/> */}
      <Section />
  
      {/* <Layout>
        <Categories/>
        <CardsProducts/>
      </Layout> */}
      <Footer /></>

  )
}

export default Layout