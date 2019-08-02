import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Flex, Text } from "rebass"
import styled from "styled-components"
// import ShowpieceCard from "./ShowpieceCard"
import SectionHeader from "./SectionHeader"

const ImageBox = styled(Box)`
  flex: 0 0 100%;
  order: 2;

  @media (min-width: 750px) {
    flex: 0 0 55%;
    order: ${props => (props.place % 2 === 0 ? 2 : 1)};
  }
`

const TextBox = styled(Box)`
  flex: 0 0 100%;
  order: 1;

  @media (min-width: 750px) {
    flex: 0 0 45%;
    order: ${props => (props.place % 2 === 0 ? 1 : 2)};
  }
`

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
    <Box py="3em">
      <Box px={15} ml="auto" mr="auto">
        {/* <Box css={{ "max-width": "1140px" }} px={15} ml="auto" mr="auto"> */}
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
            <ImageBox px={15} place={1}>
              <Box css={{ "border-radius": "15px", overflow: "hidden" }}>
                <Img
                  fluid={data.competition.childImageSharp.fluid}
                  alt="Bhangra Sway team in competitions"
                />
              </Box>
            </ImageBox>
            <TextBox px={15} mb="1em" place={1}>
              <Text
                color="#000"
                fontSize="2em"
                fontWeight={600}
                lineHeight="1.5em"
                textAlign="center"
              >
                We Participate in Competitions
              </Text>
            </TextBox>
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
            <ImageBox px={15} place={2}>
              <Box css={{ "border-radius": "15px", overflow: "hidden" }}>
                <Img
                  fluid={data.festival.childImageSharp.fluid}
                  alt="Bhangra Sway team celebrating festivals"
                />
              </Box>
            </ImageBox>
            <TextBox px={15} mb="1em" place={2}>
              <Text
                color="#000"
                fontSize="2em"
                fontWeight={600}
                lineHeight="1.5em"
                textAlign="center"
              >
                We Celebrate Festivals
              </Text>
            </TextBox>
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
            <ImageBox px={15} place={3}>
              <Box css={{ "border-radius": "15px", overflow: "hidden" }}>
                <Img
                  fluid={data.performance.childImageSharp.fluid}
                  alt="Bhangra Sway performance in events"
                />
              </Box>
            </ImageBox>
            <TextBox px={15} mb="1em" place={3}>
              <Text
                color="#000"
                fontSize="2em"
                fontWeight={600}
                lineHeight="1.5em"
                textAlign="center"
              >
                We Perform in Events
              </Text>
            </TextBox>
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
            <ImageBox px={15} place={4}>
              <Box css={{ "border-radius": "15px", overflow: "hidden" }}>
                <Img
                  fluid={data.workshop.childImageSharp.fluid}
                  alt="Bhangra sway workshops"
                />
              </Box>
            </ImageBox>
            <TextBox px={15} mb="1em" place={4}>
              <Text
                color="#000"
                fontSize="2em"
                fontWeight={600}
                lineHeight="1.5em"
                textAlign="center"
              >
                We give Workshops
              </Text>
            </TextBox>
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
