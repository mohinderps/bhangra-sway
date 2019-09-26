import React from "react"
import { Box, Text, Flex } from "rebass"
import styled from "styled-components"
// import HeroVideo from "../data/video.mp4"
import cover from "../data/gallery/cover-resized.jpg"
import { Facebook, Instagram, Youtube } from "styled-icons/feather"
import { FacebookUrl, InstagramUrl, YoutubeUrl } from "../constants"
import { Whatsapp } from "styled-icons/boxicons-logos"

// const StyledVideo = styled.video`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   object-fit: cover;
// `

const BookButton = styled.button`
  background-color: #1fa178 !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-weight: 400;
  margin: 0 10px;
  padding: 0 4px;
  width: 220px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
`

class Hero2 extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.videoElement = React.createRef()
  // }

  render() {
    return (
      <Box width="100vw" css={{ height: "100vh", position: "relative" }}>
        <Box
          width="100%"
          bg="rgba(0, 0, 0, 0.4)"
          css={{
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></Box>
        <Box
          width="100%"
          px="8px"
          color="white"
          css={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <Box color="white">
            <Text
              textAlign="center"
              fontSize={55}
              lineHeight="1.2em"
              fontWeight={600}
              mb={30}
            >
              Bhangra Sway
            </Text>
            <Text
              textAlign="center"
              fontSize={20}
              lineHeight="2em"
              fontWeight={300}
            >
              Want to learn Bhangra?
            </Text>
            <Text
              textAlign="center"
              fontSize={20}
              lineHeight="2em"
              fontWeight={300}
              mb={50}
            >
              Welcome to the Gurgaon's best Bhangra Academy!
            </Text>
            <Flex justifyContent="center" alignItems="center" mb={75}>
              <Box mx={20}>
                <a
                  target="_blank"
                  href={InstagramUrl}
                  rel="noopener noreferrer"
                >
                  <Instagram size={48} style={{ stroke: "white" }} />
                </a>
              </Box>
              <Box mx={20}>
                <a target="_blank" href={YoutubeUrl} rel="noopener noreferrer">
                  <Youtube size={48} style={{ stroke: "white" }} />
                </a>
              </Box>
              <Box mr={20}>
                <a target="_blank" href={FacebookUrl} rel="noopener noreferrer">
                  <Facebook size={48} style={{ stroke: "white" }} />
                </a>
              </Box>
            </Flex>
            <a
              href="https://wa.me/919971676322"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookButton>
                <Whatsapp size={24} color="white" />
                &nbsp;Book Your Slot
              </BookButton>
            </a>
          </Box>
        </Box>
        <Box
          width="100%"
          css={{
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            backgroundImage: `url(${cover})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "black",
          }}
        >
          {/* <StyledVideo className="video-bg" muted loop ref={this.videoElement}>
            <source src={HeroVideo} type="video/mp4"></source>
          </StyledVideo> */}
        </Box>
      </Box>
    )
  }

  // componentDidMount() {
  //   this.videoElement.current.addEventListener("canplaythrough", () => {
  //     this.videoElement.current.play()
  //   })
  // }
}

export default Hero2
