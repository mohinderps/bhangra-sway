import React from "react"
// import Header from "../components/Header"
import Hero from "../components/Hero"
import Showcase from "../components/Showcase"
import Reviews from "../components/Reviews"
import SayHi from "../components/SayHi"
import Packages from "../components/Packages"
// import Footer from "../components/Footer"

export default () => (
  <React.Fragment>
    <Hero />
    <Showcase />
    <Reviews />
    <SayHi />
    <Packages />
    {/* <Footer /> */}
  </React.Fragment>
)
