import React from "react"
import { Box, Text, Flex } from "rebass"
import styled from "styled-components"
import GoogleMap from "./GoogleMap"
import SectionHeading from "../system/SectionHeading"
import { Whatsapp } from "styled-icons/boxicons-logos"
import Container from "../common/Container"

const MapBox = styled(Box)`
  flex: 0 0 100%;

  @media (min-width: 992px) {
    flex: 0 0 70%;
  }
`

const AddressBox = styled(Box)`
  flex: 0 0 100%;

  @media (min-width: 992px) {
    flex: 0 0 30%;
  }
`

const SayHi = () => (
  <Box py={70}>
    <SectionHeading>Come say hi</SectionHeading>
    <Container>
      <Flex
        ml={-15}
        mr={-15}
        pb="2em"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexWrap="wrap"
      >
        <MapBox p={15}>
          <Box css={{ position: "relative", height: "500px" }}>
            <GoogleMap />
          </Box>
        </MapBox>

        <AddressBox p={15}>
          <Text color="#999" fontSize={18} fontWeight={400} lineHeight="2em">
            Email us
          </Text>
          <Text color="#000" fontSize={18} fontWeight={400} lineHeight="2em">
            contact@bhangrasway.com
          </Text>
          <Text color="#999" fontSize={18} fontWeight={400} lineHeight="2em">
            Call us
          </Text>
          <Text color="#000" fontSize={18} fontWeight={400} lineHeight="2em">
            9971676322
          </Text>
          <Text color="#999" fontSize={18} fontWeight={400} lineHeight="2em">
            Drop us a message
          </Text>
          <Box>
            <a
              href="https://wa.me/919971676322"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex
                bg="#01e675"
                width={36}
                css={{ height: "36px", borderRadius: "6px" }}
                justifyContent="center"
                alignItems="center"
              >
                <Whatsapp size={30} color="white" />
              </Flex>
            </a>
          </Box>
        </AddressBox>
      </Flex>
    </Container>
  </Box>
)

export default SayHi
