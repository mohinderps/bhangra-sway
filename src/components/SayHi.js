import React from "react"
import { Box } from "rebass"
import GoogleMap from "./GoogleMap"
import SectionHeader from "./SectionHeader"

const SayHi = () => (
  <Box py={70}>
    {/* <SectionHeader title="Come say hi" /> */}
    <Box px={15} ml="auto" mr="auto">
      <Box css={{ position: "relative", height: "500px" }}>
        <GoogleMap />
      </Box>
    </Box>
  </Box>
)

export default SayHi
