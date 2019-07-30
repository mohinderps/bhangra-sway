import React from "react"
import { Box } from "rebass"
import SectionHeading from "../system/SectionHeading"

const SectionHeader = ({ title }) => (
  <Box mb={"4.75em"}>
    <SectionHeading>{title}</SectionHeading>
  </Box>
)

export default SectionHeader
