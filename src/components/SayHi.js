import React from "react"
import { Box } from "rebass"
import GoogleMap from "./GoogleMap"
import SectionHeading from "../system/SectionHeading"

const SayHi = () => (
  <Box py={70}>
    <SectionHeading>Come say hi</SectionHeading>
    <Box px={15} ml="auto" mr="auto">
      <Box py={15} css={{ position: "relative", height: "500px" }}>
        <GoogleMap />
      </Box>
    </Box>
  </Box>
)

export default SayHi
