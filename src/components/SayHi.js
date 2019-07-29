import React from "react"
import GoogleMap from "./GoogleMap"
import { Box } from "rebass"

const SayHi = () => (
  <Box
    width={4 / 5}
    ml="auto"
    mr="auto"
    css={{ position: "relative", height: "500px" }}
  >
    <GoogleMap />
  </Box>
)

export default SayHi
