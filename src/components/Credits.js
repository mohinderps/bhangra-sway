import React from "react"
import { Card, Text } from "rebass"
import { Heart } from "styled-icons/boxicons-solid/Heart"
import styled from "styled-components"

const RedHeart = styled(Heart)`
  fill: red;
`

const Credits = () => (
  <Card bg="black" color="white">
    <Text textAlign="center" letterSpacing=".05em">
      Made with <RedHeart size="18" /> and a bhangra smile.
    </Text>
  </Card>
)

export default Credits
