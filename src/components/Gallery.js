import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: name, order: DESC }
        filter: { relativeDirectory: { eq: "gallery" } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 500, height: 500) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allFile.edges.map(edge => (
        <Img fixed={edge.node.childImageSharp.fixed} alt="headshot" />
      ))}
    </div>
  )
}

export default Gallery
