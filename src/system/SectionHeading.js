import React from "react"
import { Text, Box } from "rebass"

export default ({ children }) => (
  <Box px={15} ml="auto" mr="auto" mb="2em">
    <Text
      textAlign="center"
      fontSize={32}
      fontWeight={600}
      lineHeight="1.5em"
      color="#000"
    >
      {children}
    </Text>
  </Box>
)
