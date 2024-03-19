import Hero from "../Hero/Hero"
import Section from "../Section/Section"
import Footer from "../Footer/Footer"
import Featured from "../Featured/Featured"

function Layout() {

  return (<>
      <Hero />
      {/* <Featured/> */}
      <Section />
  
      {/* <Layout>
        <Categories/>
        <CardsProducts/>
      </Layout> */}
      <Footer />
      </>

  )
}

export default Layout