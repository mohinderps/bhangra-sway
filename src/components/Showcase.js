import React from "react"
import Showpiece from "./Showpiece"
import { useStaticQuery, graphql } from "gatsby"

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
      <Showpiece image={data.competition.childImageSharp.fluid} text="abc" />
      {/* <Showpiece image={data.family.childImageSharp.fluid} text="abc" /> */}
      <Showpiece
        image={data.festival.childImageSharp.fluid}
        text="abc"
        reverse
      />
      <Showpiece image={data.performance.childImageSharp.fluid} text="abc" />
      <Showpiece
        image={data.workshop.childImageSharp.fluid}
        text="abc"
        reverse
      />
      {/* <Img fixed={data.competition.childImageSharp.fixed} /> */}
      {/* <Img fluid={data.festival.childImageSharp.fluid} /> */}
    </div>
  )
}

export default Showcase
