import React from "react"
import Header from "../components/Header"

const Services = () => (
  <div>
    <Header />
    <div>
      <h1 style={{ textAlign: "center" }}>Our Services</h1>
      <p style={{ fontSize: "x-large" }}>
        We are happy to serve you one of the most energetic, happiest and
        traditional Bhangra dance training. We feel glad to announce that
        “Bhangra Sway” is the only Academy, which focus only in Bhangra Dance,
        in the town. Look Ahead to know more about our services.{" "}
      </p>
    </div>

    <div style={{ display: "flex" }}>
      <div>
        <h2>In Studio Training</h2>
        <p>
          We provide all the lessons of Bhangra dance, along with folk live
          music, props and fitness training, in our astonishing Studio. Check
          our subscription space for more.
        </p>
      </div>

      <div>
        <h2>Outdoor Events</h2>
        <p>
          We train for flash mobs, corporate events, different level of
          competitions. Along with props and dresses as per your requirement.
        </p>
      </div>

      <div>
        <h2>Choreography</h2>
        <p>
          We choreograph for different events such as wedding, cultural events,
          dance competitions, and provide services to event management agencies
          too.
        </p>
      </div>
    </div>
  </div>
)

export default Services
