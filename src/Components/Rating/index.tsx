import { Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

import { themeFonts } from '../../styles/global';
import { Container } from './styles';

export default function RatingStars() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <Container>
      <Heading fontSize={themeFonts.fontSizes.large} fontWeight="500" textAlign="center">
        Sua pontuação nesse tema
      </Heading>
      <Rating onClick={handleRating} initialValue={5} />
    </Container>
  );
}
