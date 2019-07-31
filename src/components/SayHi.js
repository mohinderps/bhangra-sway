import React from "react"
import { Box } from "rebass"
import GoogleMap from "./GoogleMap"
import SectionHeader from "./SectionHeader"

const SayHi = () => (
  <Box py={70}>
    <SectionHeader title="Come say hi !" />
    <Box
      css={{ "max-width": "1140px", position: "relative", height: "500px" }}
      px={15}
      ml="auto"
      mr="auto"
    >
      <GoogleMap />
    </Box>
  </Box>
)

export default SayHi
