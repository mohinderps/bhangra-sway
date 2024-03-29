import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Flex, Text } from "rebass"
import styled from "styled-components"
import Container from "../common/Container"

const ImageBox = styled(Box)`
  flex: 0 0 100%;
  order: 2;

  @media (min-width: 768px) {
    order: ${props => (props.place % 2 === 0 ? 2 : 1)};
  }

  @media (min-width: 768px) {
    flex: 0 0 65%;
  }

  @media (min-width: 992px) {
    flex: 0 0 60%;
  }

  @media (min-width: 1200px) {
    flex: 0 0 55%;
  }
`

const TextBox = styled(Box)`
  flex: 0 0 100%;
  order: 1;
  text-align: center;

  @media (min-width: 768px) {
    order: ${props => (props.place % 2 === 0 ? 1 : 2)};
    text-align: ${props => (props.place % 2 === 0 ? "right" : "left")};
  }

  @media (min-width: 768px) {
    flex: 0 0 35%;
  }

  @media (min-width: 992px) {
    flex: 0 0 40%;
  }

  @media (min-width: 1200px) {
    flex: 0 0 45%;
  }
`

const ShowcaseRow = styled(Flex)`
  padding-bottom: 2em;
  padding-top: 2em;

  @media (min-width: 576px) {
    padding-bottom: 4em;
    padding-top: 4em;
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
    <Box py={70}>
      <Container>
        <ShowcaseRow
          ml={-15}
          mr={-15}
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <ImageBox px={15} place={1}>
            <Img
              fluid={data.competition.childImageSharp.fluid}
              alt="Bhangra Sway team in competitions"
            />
          </ImageBox>
          <TextBox px={15} mb="1em" place={1}>
            <Text
              color="#000"
              fontSize="2em"
              fontWeight={600}
              lineHeight="1.5em"
            >
              We Participate in Competitions
            </Text>
          </TextBox>
        </ShowcaseRow>
      </Container>

      <Container>
        <ShowcaseRow
          ml={-15}
          mr={-15}
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <ImageBox px={15} place={2}>
            <Img
              fluid={data.festival.childImageSharp.fluid}
              alt="Bhangra Sway team celebrating festivals"
            />
          </ImageBox>
          <TextBox px={15} mb="1em" place={2}>
            <Text
              color="#000"
              fontSize="2em"
              fontWeight={600}
              lineHeight="1.5em"
            >
              We Celebrate Festivals
            </Text>
          </TextBox>
        </ShowcaseRow>
      </Container>

      <Container>
        <ShowcaseRow
          ml={-15}
          mr={-15}
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <ImageBox px={15} place={3}>
            <Img
              fluid={data.performance.childImageSharp.fluid}
              alt="Bhangra Sway performance in events"
            />
          </ImageBox>
          <TextBox px={15} mb="1em" place={3}>
            <Text
              color="#000"
              fontSize="2em"
              fontWeight={600}
              lineHeight="1.5em"
            >
              We Perform in Events
            </Text>
          </TextBox>
        </ShowcaseRow>
      </Container>

      <Container>
        <ShowcaseRow
          ml={-15}
          mr={-15}
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <ImageBox px={15} place={4}>
            <Img
              fluid={data.workshop.childImageSharp.fluid}
              alt="Bhangra sway workshops"
            />
          </ImageBox>
          <TextBox px={15} mb="1em" place={4}>
            <Text
              color="#000"
              fontSize="2em"
              fontWeight={600}
              lineHeight="1.5em"
            >
              We give Workshops
            </Text>
          </TextBox>
        </ShowcaseRow>
      </Container>

      <Container>
        <ShowcaseRow
          ml={-15}
          mr={-15}
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
              mb="1rem"
              textAlign="center"
            >
              We are Bhangra Sway Family
            </Text>

            <Img
              fluid={data.family.childImageSharp.fluid}
              alt="Bhangra Sway Family"
            />
          </Box>
        </ShowcaseRow>
      </Container>
    </Box>
  )
}

export default Showcase
