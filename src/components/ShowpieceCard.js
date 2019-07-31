import React from "react"
import { Text, Box } from "rebass"

const ShowpieceCard = ({ title }) => (
  <Box>
    {title.split(" ").map((word, index, words) => {
      if (index === words.length - 1) {
        return (
          <Text
            key={index}
            color="#000"
            fontSize={45}
            fontWeight={600}
            lineHeight="1.2em"
            css={{ "text-transform": "uppercase" }}
          >
            {word}
          </Text>
        )
      }
      return (
        <Text
          color="#999"
          key={index}
          fontSize={40}
          fontWeight={600}
          lineHeight="1.2em"
        >
          {word}
        </Text>
      )
    })}
  </Box>
)

export default ShowpieceCard
