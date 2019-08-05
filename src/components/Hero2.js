import React from "react"
import { Box } from "rebass"
import styled from "styled-components"
import HeroVideo from "../data/video.mp4"

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`

class Hero2 extends React.Component {
  constructor(props) {
    super(props)
    this.videoElement = React.createRef()
  }

  render() {
    return (
      <Box>
        <StyledVideo className="video-bg" muted loop ref={this.videoElement}>
          <source src={HeroVideo} type="video/mp4"></source>
        </StyledVideo>
      </Box>
    )
  }

  componentDidMount() {
    this.videoElement.current.addEventListener("canplaythrough", () => {
      this.videoElement.current.play()
    })
  }
}

export default Hero2
