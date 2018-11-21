import React from 'react';
import { Container, Title, Paragraph } from "../../components/SceneCommonStyles";


const paragraphs = [
  "Page not found... ",
];

const NotFoundScene = () => (
  <Container>
    <Title>Ooops</Title>
    {
      paragraphs.map((paragraph, index) => (
        <Paragraph key={index}>{paragraph}</Paragraph>
      ))
    }
  </Container>
);

export default NotFoundScene;
