import React from "react"
import { Box, Flex, Heading } from "rebass"
import styled from "styled-components"
import { packageFeatures } from "../constants"
import PackageCard from "./PackageCard"
import SectionHeader from "./SectionHeader"

const PackageBox = styled(Box)`
  flex: 0 0 100%;

  @media (min-width: 800px) {
    flex: 0 0 50%;
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
    price: 19000,
  },
]

const Packages = () => (
  <Box bg="#fbfbfb" py={70}>
    {/* <SectionHeader title="Packages to suit your needs" /> */}
    <Box px={15} ml="auto" mr="auto">
      {/* <Box css={{ "max-width": "1140px" }} px={15} ml="auto" mr="auto"> */}
      <Box ml={-15} mr={-15}>
        <Flex
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
      </Box>
    </Box>
  </Box>
)

export default Packages
