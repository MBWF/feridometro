import { update } from 'firebase/database';
import { query, where } from 'firebase/firestore/lite';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { db, userCollectionRef } from '../../firebase-config';
import { QuizMock } from '../../Mock/quiz';
import { AlternativeProps } from '../../Mock/types';
import { IQuizProvider, QuizProviderProps } from './types';

export const QuizProvider = createContext({} as QuizProviderProps);

export function QuizProviderContext({ children }: IQuizProvider) {
  const [wasAnswered, setWasAnswered] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (QuizMock.questions.length === currentQuestionNumber + 1) {
      navigate('/home');
    }
    setCurrentQuestionNumber((state) => state + 1);
  };

  async function updateData(data: any) {
    // await update(db, 'asd');
  }

  const handleAnswerQuestion = (alternative: AlternativeProps, questionType: string) => {
    setWasAnswered(true);
    if (alternative.isCorrectAnswer) {
      setCorrectAnswers((state) => state + 1);
    }

    setTimeout(() => {
      setWasAnswered(false);
      if (QuizMock.questions.length === currentQuestionNumber + 1) {
        setCurrentQuestionNumber(0);

        if (questionType === 't') {
          console.log('ad');
        }

        navigate('/home');
      }
      handleNextQuestion();
    }, 2000);
  };

  const value = {
    correctAnswers,
    wasAnswered,
    currentQuestionNumber,
    handleAnswerQuestion,
    handleNextQuestion,
  };
  return <QuizProvider.Provider value={value}>{children}</QuizProvider.Provider>;
}
