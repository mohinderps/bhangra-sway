import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 160px;
`

const ImageContainer = styled.div`
  flex-basis: 60%;
  order: ${props => (props.reverse ? 2 : 1)};
`

const TextContainer = styled.div`
  flex-basis: 40%;
  order: ${props => (props.reverse ? 1 : 2)};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Showpiece = ({ image, text, reverse }) => {
  return (
    <StyledDiv>
      <ImageContainer reverse={reverse}>
        <Img fluid={image} />
      </ImageContainer>
      <TextContainer reverse={reverse}>TextContainer</TextContainer>
    </StyledDiv>
  )
}

export default Showpiece
