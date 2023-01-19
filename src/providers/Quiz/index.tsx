import { update } from 'firebase/database';
import { query, where } from 'firebase/firestore/lite';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { db, userCollectionRef } from '../../firebase-config';
import { e_QuizMock, i_QuizMock, m_QuizMock, QuizMock } from '../../Mock/quiz';
import { AlternativeProps, QuestionsType } from '../../Mock/types';
import { IQuizProvider, QuizProviderProps } from './types';

export const QuizProvider = createContext({} as QuizProviderProps);

export function QuizProviderContext({ children }: IQuizProvider) {
  const [wasAnswered, setWasAnswered] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [currentQuestions, setCurrentQuestions] = useState<QuestionsType[]>([]);
  const [currentQuestionType, setCurrentQuestionType] = useState<string>('');
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (currentQuestions.length === currentQuestionNumber + 1) {
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

  useEffect(() => {
    if (location.pathname === '/Tecido/quiz') {
      setCurrentQuestions(QuizMock.questions);
      setCurrentQuestionType('t');
      return;
    }
    if (location.pathname === '/Bordas/quiz') {
      setCurrentQuestions(e_QuizMock.questions);
      setCurrentQuestionType('e');

      return;
    }
    if (location.pathname === '/Umidade/quiz') {
      setCurrentQuestions(m_QuizMock.questions);
      setCurrentQuestionType('m');
      return;
    }

    setCurrentQuestions(i_QuizMock.questions);
    setCurrentQuestionType('i');
  }, [location.pathname]);

  const value = {
    correctAnswers,
    wasAnswered,
    currentQuestionNumber,
    handleAnswerQuestion,
    handleNextQuestion,
    currentQuestions,
    currentQuestionType,
  };
  return <QuizProvider.Provider value={value}>{children}</QuizProvider.Provider>;
}
