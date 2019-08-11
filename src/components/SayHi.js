import React from "react"
import { Box, Text, Flex } from "rebass"
import GoogleMap from "./GoogleMap"
import SectionHeading from "../system/SectionHeading"
import { Whatsapp } from "styled-icons/boxicons-logos"

const SayHi = () => (
  <Box py={70}>
    <SectionHeading>Come say hi</SectionHeading>
    <Box p={15} ml="auto" mr="auto">
      <Box css={{ position: "relative", height: "500px" }}>
        <GoogleMap />
      </Box>
    </Box>
    <Box p={15} ml="auto" mr="auto">
      <Text color="#999" fontSize={18} fontWeight={400} lineHeight="2em">
        Email us
      </Text>
      <Text color="#000" fontSize={18} fontWeight={400} lineHeight="2em">
        contact@bhangrasway.com
      </Text>
      <Text color="#999" fontSize={18} fontWeight={400} lineHeight="2em">
        Call us
      </Text>
      <Text color="#000" fontSize={18} fontWeight={400} lineHeight="2em">
        9971676322
      </Text>
      <Text color="#999" fontSize={18} fontWeight={400} lineHeight="2em">
        Drop us a message
      </Text>
      <Box>
        <a href="https://wa.me/919971676322" target="_blank">
          <Flex
            bg="#01e675"
            width={36}
            css={{ height: "36px", borderRadius: "6px" }}
            justifyContent="center"
            alignItems="center"
          >
            <Whatsapp size={30} color="white" />
          </Flex>
        </a>
      </Box>
    </Box>
  </Box>
)

export default SayHi
