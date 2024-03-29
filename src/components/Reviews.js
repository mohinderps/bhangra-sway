import React from "react"
import { Flex, Box } from "rebass"
import styled from "styled-components"
import ReviewCard from "./ReviewCard"
import SectionHeading from "../system/SectionHeading"
import Container from "../common/Container"

const ReviewBox = styled(Box)`
  flex: 0 0 100%;

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }
`

const reviews = [
  {
    id: 1,
    reviewedBy: "Jaskaran Rai",
    reviewText:
      "Amazing dance academy. Instructors are very friendly and the environment is very inspiring with everyone teaching each other. They also helped me prepare a dance for my engagement and it garnered huge appreciation from everyone. All thanks to the Bhangra Sway team. Keep up the hard work guys !!",
  },
  {
    id: 2,
    reviewedBy: "Neha Bhardwaj",
    reviewText:
      "One of the Best Bhangra classes. Trainers are so talented and dedicated. People those are searching for fitness with positive energy and enjoyable environment - Bhangra Sway is the best option for them. Special thanks and credits to dedicated Trainers - Amit and Jaskaran.",
  },
  {
    id: 3,
    reviewedBy: "Ankita Jhingon",
    reviewText:
      "Coaches (Jaskaran & Amit ) are fun, energetic and very skilled at what they do & Brings the perfect amount of energy to motivate members to become better dancers &  develop a passion for Bhangra . As an incredibly talented Coaches , creates a welcoming and enriching environment for dancers of all levels . I highly recommend this Academy whether you are a beginner or more advanced .",
  },
  {
    id: 4,
    reviewedBy: "Maninder Singh",
    reviewText:
      "One of best environment I have ever found in any classes. Everyone is getting special attention time to time when ever required. Trainers are so helpful to groom you up. No doubt they will grow soon and trainers are very much dedicated for their work. Jaskaran and Amit congrats for your achievements in Bhangra in such a small age.",
  },
]

const Reviews = () => (
  <Box bg="#fbfbfb" py={70}>
    <SectionHeading>What people say about us</SectionHeading>
    <Container>
      <Flex
        ml={-15}
        mr={-15}
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="stretch"
        flexWrap="wrap"
      >
        {reviews.slice(0, 2).map(review => (
          <ReviewBox p={15} key={review.id}>
            <ReviewCard
              reviewedBy={review.reviewedBy}
              reviewText={review.reviewText}
            />
          </ReviewBox>
        ))}
      </Flex>
    </Container>

    <Container>
      <Flex
        ml={-15}
        mr={-15}
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="stretch"
        flexWrap="wrap"
      >
        {reviews.slice(2, 4).map(review => (
          <ReviewBox p={15} key={review.id}>
            <ReviewCard
              reviewedBy={review.reviewedBy}
              reviewText={review.reviewText}
            />
          </ReviewBox>
        ))}
      </Flex>
    </Container>
  </Box>
)

export default Reviews
