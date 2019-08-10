import React from "react"
// import Header from "../components/Header"
import Hero from "../components/Hero"
import Hero2 from "../components/Hero2"
import Showcase from "../components/Showcase"
import Reviews from "../components/Reviews"
import SayHi from "../components/SayHi"
import Packages from "../components/Packages"
import Credits from "../components/Credits"
// import Footer from "../components/Footer"

export default () => (
  <React.Fragment>
    <Hero />
    {/* <Hero2 /> */}
    <Showcase />
    <Reviews />
    <SayHi />
    <Packages />
    <Credits />
    {/* <Footer /> */}
  </React.Fragment>
)
