import React from "react"
import { Card, Box } from "rebass"
import { QuoteAltLeft } from "styled-icons/boxicons-solid/QuoteAltLeft"

const ReviewCard = ({ reviewedBy, reviewText }) => (
  <Card bg="#fff" p={40} css={{ height: "100%", position: "relative" }}>
    <Box pl={40} mb={30} css={{ position: "relative" }}>
      <Box css={{ position: "absolute", top: "0", left: "0" }}>
        <QuoteAltLeft width={32} height={32} />
      </Box>
      {reviewText}
    </Box>
    <Box css={{ position: "absolute", right: "25px", bottom: "25px" }}>
      {reviewedBy}
    </Box>
  </Card>
)

export default ReviewCard
