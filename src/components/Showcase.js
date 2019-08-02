import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Flex, Text } from "rebass"
import ShowpieceCard from "./ShowpieceCard"
import SectionHeader from "./SectionHeader"

const Showcase = () => {
  const data = useStaticQuery(graphql`
    query {
      competition: file(relativePath: { eq: "gallery/competition.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      family: file(relativePath: { eq: "gallery/family.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      festival: file(relativePath: { eq: "gallery/festival.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      performance: file(relativePath: { eq: "gallery/performance.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      workshop: file(relativePath: { eq: "gallery/workshop.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Box py={70}>
      <Box css={{ "max-width": "1140px" }} px={15} ml="auto" mr="auto">
        <Box ml={-15} mr={-15}>
          {/* <Flex
            py={70}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Box px={15} flex="0 0 55%">
              <Box css={{ "border-radius": "15px", overflow: "hidden" }}>
                <Img
                  fluid={data.competition.childImageSharp.fluid}
                  alt="Bhangra Sway team in competitions"
                />
              </Box>
            </Box>
            <Box px={15} flex="0 0 40%" ml="5%">
              <ShowpieceCard title="We Participate In Competitions" />
            </Box>
          </Flex> */}
          <Flex
            py="2em"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Box px={15} flex="0 0 100%" order={2}>
              <Box css={{ "border-radius": "15px", overflow: "hidden" }}>
                <Img
                  fluid={data.competition.childImageSharp.fluid}
                  alt="Bhangra Sway team in competitions"
                />
              </Box>
            </Box>
            <Box px={15} flex="0 0 100%" order={1} mb="1em">
              <Text
                color="#000"
                fontSize="2em"
                fontWeight={600}
                lineHeight="1.5em"
                textAlign="center"
              >
                We Participate in Competitions
              </Text>
            </Box>
          </Flex>

          {/* <Flex
            py={70}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Box px={15} flex="0 0 55%" order={2}>
              <Box css={{ "border-radius": "15px", overflow: "hidden" }}>
                <Img
                  fluid={data.festival.childImageSharp.fluid}
                  alt="Bhangra Sway team celebrating festivals"
                />
              </Box>
            </Box>
            <Box px={15} flex="0 0 40%" ml="5%" order={1}>
              <ShowpieceCard title="We Celebrate Festivals" />
            </Box>
          </Flex> */}

          <Flex
            py="2em"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Box px={15} flex="0 0 100%" order={2}>
              <Box css={{ "border-radius": "15px", overflow: "hidden" }}>
                <Img
                  fluid={data.festival.childImageSharp.fluid}
                  alt="Bhangra Sway team celebrating festivals"
                />
              </Box>
            </Box>
            <Box px={15} flex="0 0 100%" order={1} mb="1em">
              <Text
                color="#000"
                fontSize="2em"
                fontWeight={600}
                lineHeight="1.5em"
                textAlign="center"
              >
                We Celebrate Festivals
              </Text>
            </Box>
          </Flex>

          {/* <Flex
            py={70}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Box px={15} flex="0 0 55%">
              <Box css={{ "border-radius": "15px", overflow: "hidden" }}>
                <Img
                  fluid={data.performance.childImageSharp.fluid}
                  alt="Bhangra Sway performance in events"
                />
              </Box>
            </Box>
            <Box px={15} flex="0 0 40%" ml="5%">
              <ShowpieceCard title="We Perform In Events" />
            </Box>
          </Flex> */}
          <Flex
            py="2em"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Box px={15} flex="0 0 100%" order={2}>
              <Box css={{ "border-radius": "15px", overflow: "hidden" }}>
                <Img
                  fluid={data.performance.childImageSharp.fluid}
                  alt="Bhangra Sway performance in events"
                />
              </Box>
            </Box>
            <Box px={15} flex="0 0 100%" order={1} mb="1em">
              <Text
                color="#000"
                fontSize="2em"
                fontWeight={600}
                lineHeight="1.5em"
                textAlign="center"
              >
                We Perform in Events
              </Text>
            </Box>
          </Flex>

          {/* <Flex
            py={70}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Box px={15} flex="0 0 55%" order={2}>
              <Box css={{ "border-radius": "15px", overflow: "hidden" }}>
                <Img
                  fluid={data.workshop.childImageSharp.fluid}
                  alt="Bhangra sway workshops"
                />
              </Box>
            </Box>
            <Box px={15} flex="0 0 40%" ml="5%" order={1}>
              <ShowpieceCard title="We Give Workshops" />
            </Box>
          </Flex> */}

          <Flex
            py="2em"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Box px={15} flex="0 0 100%" order={2}>
              <Box css={{ "border-radius": "15px", overflow: "hidden" }}>
                <Img
                  fluid={data.workshop.childImageSharp.fluid}
                  alt="Bhangra sway workshops"
                />
              </Box>
            </Box>
            <Box px={15} flex="0 0 100%" order={1} mb="1em">
              <Text
                color="#000"
                fontSize="2em"
                fontWeight={600}
                lineHeight="1.5em"
                textAlign="center"
              >
                We give Workshops
              </Text>
            </Box>
          </Flex>

          <Flex
            py="2em"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Box px={15} flex="0 0 100%">
              <Text
                color="#000"
                fontSize="2em"
                fontWeight={600}
                lineHeight="1.5em"
                textAlign="center"
                mb="1rem"
              >
                We are Bhangra Sway Family
              </Text>
              <Box css={{ "border-radius": "15px", overflow: "hidden" }}>
                <Img
                  fluid={data.family.childImageSharp.fluid}
                  alt="Bhangra Sway Family"
                />
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Showcase
