import React from "react"
import { Box, Text, Flex } from "rebass"
import styled from "styled-components"

const Hero = () => {
  return (
    <Box css={{ height: "100vh" }} bg="rgb(255, 252, 247)">
      <Flex
        css={{ height: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box px={20}>
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
              bg="#6ce6b0"
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
            mb={30}
          >
            Welcome to the Gurgaon's best Bhangra Academy!
          </Text>
        </Box>
      </Flex>
      {/* <HeroContent>
        <Flex
          css={{ height: "100%" }}
          justifyContent="center"
          alignItems="center"
          px={20}
        >
          <Box> */}
      {/* <Text
              textAlign="center"
              fontSize={55}
              color="#fff"
              lineHeight="1.5em"
              mb={30}
            >
              Bhangra Sway
            </Text>
            <Text
              textAlign="center"
              fontSize={16}
              color="#fff"
              lineHeight="1.5em"
            >
              Gurgaon | Join us now
            </Text> */}
      {/* </Box>
        </Flex>
      </HeroContent> */}
    </Box>
  )
}

export default Hero
