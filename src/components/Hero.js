import React from "react"
import { Box, Text, Flex } from "rebass"
import styled from "styled-components"
import { Facebook, Instagram, Youtube } from "styled-icons/feather"
import { FacebookUrl, InstagramUrl, YoutubeUrl } from "../constants"

const Hero = () => {
  return (
    <Box
      px={20}
      css={{ height: "100vh", position: "relative" }}
      bg="rgba(187,239,253,0.1)"
    >
      <Flex
        css={{ height: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Text
            textAlign="center"
            fontSize={55}
            lineHeight="1.2em"
            fontWeight={600}
            color="#1e1231"
            mb={30}
          >
            Bhangra Sway
          </Text>
          <Flex justifyContent="center" alignItems="center">
            <Box
              width={60}
              css={{ height: "16px", "border-radius": "8px" }}
              bg="#61dafb"
              mb={30}
            ></Box>
          </Flex>
          <Text
            textAlign="center"
            fontSize={20}
            lineHeight="2em"
            fontWeight={300}
            color="#1e1231"
          >
            Want to learn Bhangra?
          </Text>
          <Text
            textAlign="center"
            fontSize={20}
            lineHeight="2em"
            fontWeight={300}
            color="#1e1231"
            mb={80}
          >
            Welcome to the Gurgaon's best Bhangra Academy!
          </Text>
          <Flex justifyContent="center" alignItems="center">
            <Box mx={20}>
              <a target="_blank" href={InstagramUrl}>
                <Instagram size={48} style={{ stroke: "#61dafb" }} />
              </a>
            </Box>
            <Box mx={20}>
              <a target="_blank" href={YoutubeUrl}>
                <Youtube size={48} style={{ stroke: "#61dafb" }} />
              </a>
            </Box>
            <Box mr={20}>
              <a target="_blank" href={FacebookUrl}>
                <Facebook size={48} style={{ stroke: "#61dafb" }} />
              </a>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero
