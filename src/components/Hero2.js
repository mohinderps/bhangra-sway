import React from "react"
import { Box, Text, Flex } from "rebass"
import styled from "styled-components"
import HeroVideo from "../data/video.mp4"

const Header = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  z-index: 10;
  background-color: #000;
`

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  z-index: -99;
`

const HeroContent = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
`

class Hero2 extends React.Component {
  constructor(props) {
    super(props)
    this.videoElement = React.createRef()
  }

  render() {
    return (
      <Box css={{ height: "100vh", position: "relative" }}>
        <Header>
          <Text
            textAlign="center"
            fontSize={20}
            color="#fff"
            css={{ "text-transform": "uppercase" }}
          >
            Bhangra Sway
          </Text>
        </Header>
        <StyledVideo className="video-bg" muted loop ref={this.videoElement}>
          <source src={HeroVideo} type="video/mp4"></source>
        </StyledVideo>
        <HeroContent>
          <Flex
            css={{ height: "100%" }}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Text
                textAlign="center"
                fontSize={55}
                color="#fff"
                lineHeight="1.5em"
                mb={30}
              >
                Immortal Dance of Punjab
              </Text>
              <Text
                textAlign="center"
                fontSize={16}
                color="#fff"
                lineHeight="1.5em"
              >
                Gurgaon | Join us now
              </Text>
            </Box>
          </Flex>
        </HeroContent>
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
