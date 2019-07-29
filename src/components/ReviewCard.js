import React from "react"
import { Card, Box } from "rebass"
import { QuoteAltLeft } from "styled-icons/boxicons-solid/QuoteAltLeft"

const ReviewCard = ({ reviewedBy, reviewText }) => (
  <Card bg="white" p={40}>
    <Box pl={40} css={{ position: "relative" }}>
      <Box css={{ position: "absolute", top: "0", left: "0" }}>
        <QuoteAltLeft width={32} height={32} />
      </Box>
      Card
    </Box>
  </Card>
)

export default ReviewCard
