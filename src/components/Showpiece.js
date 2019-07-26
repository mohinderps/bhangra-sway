import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 500px;
  height: 500px;
`

const Showpiece = ({ image }) => {
  return (
    <StyledDiv>
      <Img fluid={image} />
    </StyledDiv>
  )
}

export default Showpiece
