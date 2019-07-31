import React from "react"
import { Card, Heading, Text } from "rebass"
import styled from "styled-components"
import PriceINR from "../system/PriceINR"

const StyledCard = styled(Card)`
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.085);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.085);
  }
`

const PackageCard = ({ name, price }) => (
  <StyledCard bg="#fff" css={{ height: "100%" }} p={40}>
    <Heading textAlign="center">{name}</Heading>
    <Heading textAlign="center">
      <PriceINR price={price} />
    </Heading>
  </StyledCard>
)

export default PackageCard
