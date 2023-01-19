import { Button, Stack } from '@chakra-ui/react';

import { Quiz } from '../../Components/Quiz';
import { useQuiz } from '../../providers/Quiz/useQuiz';

export function QuizPage() {
  const {
    currentQuestionNumber,
    handleNextQuestion,
    wasAnswered,
    currentQuestions,
    currentQuestionType,
  } = useQuiz();

  return (
    <Stack
      padding="1rem"
      height="90vh"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="100%"
    >
      <Quiz
        questionsData={currentQuestions[currentQuestionNumber]}
        questionType={currentQuestionType}
      />

      <Button onClick={() => handleNextQuestion()} disabled={wasAnswered}>
        Continuar
      </Button>
    </Stack>
  );
}
