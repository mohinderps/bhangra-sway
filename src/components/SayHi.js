import React from "react"
import GoogleMap from "./GoogleMap"
import { Box, Heading } from "rebass"

const SayHi = () => (
  <Box py={50}>
    <Heading textAlign="center">Come Say Hi !</Heading>
    <Box
      width={4 / 5}
      ml="auto"
      mr="auto"
      css={{ position: "relative", height: "500px" }}
    >
      <GoogleMap />
    </Box>
  </Box>
)

export default SayHi
