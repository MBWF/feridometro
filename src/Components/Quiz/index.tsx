import { Button, Flex, Image, Text } from '@chakra-ui/react';

import { AlternativeProps, QuestionsType } from '../../Mock/types';
import { useQuiz } from '../../providers/Quiz/useQuiz';

interface QuizProps {
  questionsData: QuestionsType;
  questionType: string;
}

export function Quiz({ questionsData, questionType }: QuizProps) {
  const { wasAnswered, handleAnswerQuestion, currentQuestionNumber } = useQuiz();

  const handleColors = (alternative: AlternativeProps) => {
    if (alternative.isCorrectAnswer) {
      return 'green';
    }

    return 'red';
  };

  return (
    <>
      <Flex flexDirection="column" maxWidth="30rem">
        <Text fontWeight="bold" mb="0.4rem">
          Questão: {currentQuestionNumber + 1}
        </Text>
        <Text>{questionsData?.title}</Text>
      </Flex>

      <Flex>
        <Image src={questionsData?.url_image} width={['10rem', '12rem', '14rem']} />
      </Flex>

      <Flex flexDirection="column" gap="1rem" width="100%" maxWidth="500px">
        {questionsData?.alternatives?.map((alternative) => (
          <Button
            key={alternative?.name}
            onClick={() => handleAnswerQuestion(alternative, questionType)}
            disabled={wasAnswered}
            colorScheme={wasAnswered ? handleColors(alternative) : 'messenger'}
          >
            {alternative.name}
          </Button>
        ))}
      </Flex>
    </>
  );
}
