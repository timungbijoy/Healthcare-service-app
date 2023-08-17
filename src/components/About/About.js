import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "70vh",
      }}
      points="0,100 50,00, 100,100"
    >
      <Container maxWidth="xl">
        <Typography
          sx={{ color: "primary.main", mx: 2, p: 8, textAlign: "center" }}
          variant="h4"
        >
          About Us
        </Typography>

        <Typography
          sx={{ mx: -2, p: 2, mb: 4, textAlign: "justify" }}
          variant="p"
        >
          Welcome to Lifeline Center, your premier destination for holistic
          fitness, wellness, and beauty. We offer a comprehensive range of
          services to nourish your mind, body, and spirit. Our integrated
          approach combines physical fitness, psychological well-being, vitamin
          therapy, and cosmetology to create a transformative experience for our
          clients. Explore our offerings and discover a new level of well-being
          and self-care. Whether you're seeking relationship support, addiction
          treatment, mindful parenting guidance, or simply looking to enhance
          your overall wellness, Lifeline Center is here to empower you on your
          journey towards a happier, healthier, and more fulfilling life.
          <br />
          <br />
          <Typography sx={{ mx: 2, p: 2, textAlign: "center" }} variant="h6">
            Join Our Community
          </Typography>
          At Lifeline Institute, We believe in the power of community. Join our
          network of individuals passionate about personalised wellness. Stay
          up-to-date with the latest research, access educational resources and
          connect with like minded individuals on a similar journey towards
          optimal health. We think something between 8 to 9 out of 10 patients
          walks out of our services very satisfied, but typical web reviews make
          hospitals look much worse. This negative bias reviews is a big deal
          because people are walking into their care journey with a negative
          mindset about the care they are going to get, and that’s not good. The
          scale is just off because of the motivated complainers.
          <br />
          <br />
          Be sure to leave a review on{" "}
          <strong>MetaGen Nutrigenomics Clinic</strong> , whether you’ve had a
          negative or a positive experience. Share your suggestions about
          writing hospital reviews in the comments below or message us on
          facebook{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            @lifeline
          </a>
          .
          <br />
          <br />
          <br />
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
