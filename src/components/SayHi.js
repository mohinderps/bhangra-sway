import React from "react"
import GoogleMap from "./GoogleMap"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 80%;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`

const SayHi = () => (
  <StyledDiv>
    <GoogleMap />
  </StyledDiv>
)

export default SayHi
