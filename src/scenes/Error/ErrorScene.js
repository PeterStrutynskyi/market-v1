import React from 'react';
import { Container, Title, Paragraph } from "../../components/SceneCommonStyles";


const paragraphs = [
  "Sorry, Server is unreachable now.",
  "Please, try later.",
];

const ErrorScene = () => (
  <Container>
    <Title>Error</Title>
    {
      paragraphs.map((paragraph, index) => (
        <Paragraph key={index}>{paragraph}</Paragraph>
      ))
    }
  </Container>
);

export default ErrorScene;
