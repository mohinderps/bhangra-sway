import React from "react"
import { Box, Flex, Heading } from "rebass"
import { packageFeatures } from "../constants"
import PackageCard from "./PackageCard"
import SectionHeader from "./SectionHeader"

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
  <Box py={50}>
    <SectionHeader title="Packages to suit your needs !" />
    <Box width={4 / 5} ml="auto" mr="auto">
      <Box ml={-15} mr={-15}>
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItem="stretch"
        >
          {packages.map(p => (
            <Box key={p.id} px={15} flex="0 0 25%">
              <PackageCard name={p.name} price={p.price} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  </Box>
)

export default Packages
