import React from "react"
import Showpiece from "./Showpiece"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box } from "rebass"

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
    <Box py={50}>
      <Box width={4 / 5} ml="auto" mr="auto">
        <Showpiece
          image={data.competition.childImageSharp.fluid}
          text="We participate in competitions"
        />
        <Showpiece
          image={data.festival.childImageSharp.fluid}
          text="We celebrate festivals"
          reverse
        />
        <Showpiece
          image={data.performance.childImageSharp.fluid}
          text="We perform"
        />
        <Showpiece
          image={data.workshop.childImageSharp.fluid}
          text="We give workshops"
          reverse
        />
        <Img
          fluid={data.family.childImageSharp.fluid}
          alt="Bhangra Sway Family"
        />
      </Box>
    </Box>
  )
}

export default Showcase
