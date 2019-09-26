import React from "react"
import { Box, Flex } from "rebass"
import styled from "styled-components"
import PackageCard from "./PackageCard"
import SectionHeading from "../system/SectionHeading"
import Container from "../common/Container"

const PackageBox = styled(Box)`
  flex: 0 0 100%;

  @media (min-width: 576px) {
    flex: 0 0 25%;
  }
`

const packages = [
  {
    id: 1,
    name: "Monthly",
    price: 2500,
  },
  {
    id: 2,
    name: "Quarterly",
    price: 6000,
  },
  {
    id: 3,
    name: "Half Yearly",
    price: 10000,
  },
  {
    id: 4,
    name: "Annually",
    price: 18000,
  },
]

const Packages = () => (
  <Box bg="#fbfbfb" py={70}>
    <SectionHeading>Packages to suit your needs</SectionHeading>
    <Container>
      <Flex
        ml={-15}
        mr={-15}
        flexDirection="row"
        justifyContent="flex-start"
        alignItem="stretch"
        flexWrap="wrap"
      >
        {packages.map(p => (
          <PackageBox key={p.id} p={15}>
            <PackageCard name={p.name} price={p.price} />
          </PackageBox>
        ))}
      </Flex>
    </Container>
  </Box>
)

export default Packages
