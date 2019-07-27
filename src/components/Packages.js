import React from "react"
import { packageFeatures } from "../constants"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`

const StyledPackage = styled.div`
  padding: 20px;
  border: 1px solid black;
`

const packages = [
  {
    id: 1,
    name: "monthly",
    price: 2500,
    features: [
      {
        id: 1,
        name: packageFeatures.CORE_BHANGRA_MODULE,
        active: 1,
      },
      {
        id: 2,
        name: packageFeatures.SPECIAL_FITNESS_CLASSES,
        active: 1,
      },
      {
        id: 3,
        name: packageFeatures.INSTRUMENTAL_PRACTICE,
        active: 0,
      },
      {
        id: 4,
        name: packageFeatures.VIDEOGRAPHY_CHOREOGRAPHY,
        active: 1,
      },
      {
        id: 5,
        name: packageFeatures.PARTICIPATION_IN_COMPETITIONS,
        active: 0,
      },
    ],
  },
  {
    id: 2,
    name: "quarterly",
    price: 6000,
    features: [
      {
        id: 1,
        name: packageFeatures.CORE_BHANGRA_MODULE,
        active: 1,
      },
      {
        id: 2,
        name: packageFeatures.SPECIAL_FITNESS_CLASSES,
        active: 1,
      },
      {
        id: 3,
        name: packageFeatures.INSTRUMENTAL_PRACTICE,
        active: 1,
      },
      {
        id: 4,
        name: packageFeatures.VIDEOGRAPHY_CHOREOGRAPHY,
        active: 1,
      },
      {
        id: 5,
        name: packageFeatures.PARTICIPATION_IN_COMPETITIONS,
        active: 0,
      },
    ],
  },
  {
    id: 3,
    name: "half yearly",
    price: 10000,
    features: [
      {
        id: 1,
        name: packageFeatures.CORE_BHANGRA_MODULE,
        active: 1,
      },
      {
        id: 2,
        name: packageFeatures.SPECIAL_FITNESS_CLASSES,
        active: 1,
      },
      {
        id: 3,
        name: packageFeatures.INSTRUMENTAL_PRACTICE,
        active: 1,
      },
      {
        id: 4,
        name: packageFeatures.VIDEOGRAPHY_CHOREOGRAPHY,
        active: 1,
      },
      {
        id: 5,
        name: packageFeatures.PARTICIPATION_IN_COMPETITIONS,
        active: 1,
      },
    ],
  },
  {
    id: 4,
    name: "annually",
    price: 19000,
    features: [
      {
        id: 1,
        name: packageFeatures.CORE_BHANGRA_MODULE,
        active: 1,
      },
      {
        id: 2,
        name: packageFeatures.SPECIAL_FITNESS_CLASSES,
        active: 1,
      },
      {
        id: 3,
        name: packageFeatures.INSTRUMENTAL_PRACTICE,
        active: 1,
      },
      {
        id: 4,
        name: packageFeatures.VIDEOGRAPHY_CHOREOGRAPHY,
        active: 1,
      },
      {
        id: 5,
        name: packageFeatures.PARTICIPATION_IN_COMPETITIONS,
        active: 1,
      },
    ],
  },
]

const Packages = () => (
  <Wrapper>
    {packages.map(p => (
      <StyledPackage key={p.id}>
        <div>{p.name}</div>
        <div>{p.price}</div>
        <ul>
          {p.features.map(pf => (
            <li key={pf.id}>{pf.name}</li>
          ))}
        </ul>
      </StyledPackage>
    ))}
  </Wrapper>
)

export default Packages
