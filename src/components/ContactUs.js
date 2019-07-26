import React from "react"
import GoogleMap from "./GoogleMap"
import AboutUs from "./AboutAcademy"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ContactUs = () => (
  <div>
    <div>
      <Header />
    </div>
    <div>
      <h1 align="center" style={{ position: "static", margin: "70px" }}>
        CONTACT US
      </h1>
      <div
        className="container"
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
      <div
        style={{
          width: "80%",
          margin: "20px auto",
          position: "relative",
          height: "400px",
        }}
      >
        <GoogleMap />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
)

export default ContactUs
