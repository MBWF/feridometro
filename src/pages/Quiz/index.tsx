import { Button, Stack } from '@chakra-ui/react';

import { Quiz } from '../../Components/Quiz';
import { e_QuizMock, i_QuizMock, m_QuizMock, QuizMock } from '../../Mock/quiz';
import { useQuiz } from '../../providers/Quiz/useQuiz';

export function QuizPage() {
  const { currentQuestionNumber, handleNextQuestion, wasAnswered } = useQuiz();

  console.log(String(location.pathname.includes('Tecido/q')));

  console.log(String(location.pathname.includes('Inflam/q')));

  console.log(String(location.pathname.includes('Umidade/q')));

  return (
    <Stack
      padding="1rem"
      height="90vh"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      {QuizMock.type === 't' && String(location.pathname.includes('Tecido/q')) ? (
        <Quiz
          questionsData={QuizMock.questions[currentQuestionNumber]}
          questionType="t"
        />
      ) : QuizMock.type === 'i' && String(location.pathname.includes('Inflam/q')) ? (
        <Quiz
          questionsData={i_QuizMock.questions[currentQuestionNumber]}
          questionType="i"
        />
      ) : QuizMock.type === 'm' && String(location.pathname.includes('Umidade/q')) ? (
        <Quiz
          questionsData={m_QuizMock.questions[currentQuestionNumber]}
          questionType="m"
        />
      ) : QuizMock.type === 'e' && String(location.pathname.includes('Borda/q')) ? (
        <Quiz
          questionsData={e_QuizMock.questions[currentQuestionNumber]}
          questionType="e"
        />
      ) : null}

      <Button onClick={() => handleNextQuestion()} disabled={wasAnswered}>
        Continuar
      </Button>
    </Stack>
  );
}
