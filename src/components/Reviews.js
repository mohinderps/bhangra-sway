import React from "react"
import { Flex, Box, Heading } from "rebass"
import ReviewCard from "./ReviewCard"

const reviews = [
  {
    id: 1,
    reviewedBy: "Joban Goraya",
    reviewText:
      "Best place to learn real folk bhangra.....best and experienced caoches",
  },
  {
    id: 2,
    reviewedBy: "Himanshu Goyal",
    reviewText:
      "One of the best academy I have ever been to with a beautiful and good location, where one can release his/her stress, recommended for Bhangra lovers and the corporate guys!! Must visit place! Keep it up guys, nice start!",
  },
  {
    id: 3,
    reviewedBy: "Bhavana Ahluwalia",
    reviewText:
      "Bhangra sway is one of the best place where Amit and jaskaran are trying their best to make Bhangra popular among young generations with undaunted spirits and commitment . Most happening place in town . Must join",
  },
  {
    id: 4,
    reviewedBy: "Yash Deep",
    reviewText:
      "Best place! you feel welcomed when you first walk in.. genuine and highly skilled teachers.. I have learnt so much about Bhangra and Punjabi culture.. in a short period of time.. I definitely recommend this place to anyone who is looking to learn bhangra!",
  },
]

const Reviews = () => (
  <Box bg="#fbfbfb" py={50}>
    <Heading textAlign="center">What people say about us !</Heading>
    <Box width={4 / 5} ml="auto" mr="auto">
      <Box ml={-15} mr={-15}>
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          {reviews.slice(0, 2).map(review => (
            <Box px={15} flex="0 0 50%" mb={30} key={review.id}>
              <ReviewCard
                reviewedBy={review.reviewedBy}
                reviewText={review.reviewText}
              />
            </Box>
          ))}
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          {reviews.slice(2, 4).map(review => (
            <Box px={15} flex="0 0 50%" key={review.id}>
              <ReviewCard
                reviewedBy={review.reviewedBy}
                reviewText={review.reviewText}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  </Box>
)

export default Reviews
