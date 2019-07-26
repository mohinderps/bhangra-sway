import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const StyledHeader = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140px;
  font-size: small
  width: 100%;
  
  background-color: black;
  flex:1;
`

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-evenly;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 5px 0;
  margin-left: 20px;
`
const StyledLogos = styled(Link)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-end;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo/logo.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <Img fixed={data.file.childImageSharp.fixed} alt="Bhangra Sway Logo" />
      <StyledNavigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/demo">Demo</StyledLink>
        <StyledLink to="/videos">Videos</StyledLink>
      </StyledNavigation>
      <StyledLogos>
        <Img fixed={data.file.childImageSharp.fixed} alt="Bhangra Sway Logo" />
        <Img fixed={data.file.childImageSharp.fixed} alt="Bhangra Sway Logo" />
        <Img fixed={data.file.childImageSharp.fixed} alt="Bhangra Sway Logo" />
      </StyledLogos>
    </StyledHeader>
  )
}

export default Footer
