import React from "react"
import Showpiece from "./Showpiece"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledDiv = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const Title = styled.div`
  margin-bottom: 60px;
  text-align: center;
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
    <div>
      <StyledDiv>
        <Showpiece
          image={data.competition.childImageSharp.fluid}
          text="We participate in competitions"
        />
        {/* <Showpiece image={data.family.childImageSharp.fluid} text="abc" /> */}
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
        <Title>We are Bhangra Sway Family</Title>
        <Img
          fluid={data.family.childImageSharp.fluid}
          alt="Bhangra Sway Family"
        />
      </StyledDiv>
    </div>
  )
}

export default Showcase
