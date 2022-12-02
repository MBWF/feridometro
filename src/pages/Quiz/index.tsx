import { Button, Stack } from '@chakra-ui/react';

import { Quiz } from '../../Components/Quiz';
import { QuizMock } from '../../Mock/quiz';
import { useQuiz } from '../../providers/Quiz/useQuiz';

export function QuizPage() {
  const { currentQuestionNumber, handleNextQuestion, wasAnswered } = useQuiz();

  return (
    <Stack
      padding="1rem"
      height="90vh"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      {QuizMock.type.toLowerCase() === 't' && (
        <Quiz
          questionsData={QuizMock.questions[currentQuestionNumber]}
          questionType="t"
        />
      )}

      {QuizMock.type.toLowerCase() === 'i' && (
        <Quiz
          questionsData={QuizMock.questions[currentQuestionNumber]}
          questionType="i"
        />
      )}

      {QuizMock.type.toLowerCase() === 'm' && (
        <Quiz
          questionsData={QuizMock.questions[currentQuestionNumber]}
          questionType="m"
        />
      )}

      {QuizMock.type.toLowerCase() === 'e' && (
        <Quiz
          questionsData={QuizMock.questions[currentQuestionNumber]}
          questionType="e"
        />
      )}

      {QuizMock.type.toLowerCase() === 'r' && (
        <Quiz
          questionsData={QuizMock.questions[currentQuestionNumber]}
          questionType="r"
        />
      )}

      {QuizMock.type.toLowerCase() === 's' && (
        <Quiz
          questionsData={QuizMock.questions[currentQuestionNumber]}
          questionType="s"
        />
      )}

      <Button onClick={() => handleNextQuestion()} disabled={wasAnswered}>
        Continuar
      </Button>
    </Stack>
  );
}
