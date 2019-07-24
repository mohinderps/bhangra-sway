import React from "react"
import GoogleMap from "./GoogleMap"
import AboutUs from "./AboutAcademy"
// const imag = require("../../public/phoneImage.png")
const ContactUs = () => (
  <div>
    <h1 align="center">CONTACT US</h1>
    <div
      class="container"
      style={{
        display: "flex",
        justifyContent: "space-around",
        // flexDirection: "column",
        // alignItems: "center",
        // fontSize: "x-large",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "x-large",
        }}
      >
        <img src="/email.png"></img>
        <p>bhangrasway@gmail.com</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "x-large",
        }}
      >
        <img src="/phone.png"></img>
        <p>99988841256</p>
      </div>
    </div>
    <div>
      <GoogleMap />
    </div>
  </div>
)

export default ContactUs
