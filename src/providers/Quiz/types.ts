import { ReactNode } from 'react';

import { AlternativeProps, QuestionsType } from '../../Mock/types';

export interface QuizProviderProps {
  correctAnswers: number;
  wasAnswered: boolean;
  currentQuestionNumber: number;
  handleAnswerQuestion: (alternative: AlternativeProps, questionType: string) => void;
  handleNextQuestion: () => void;
  currentQuestions: QuestionsType[];
  currentQuestionType: string;
}

export type IQuizProvider = {
  children: ReactNode;
};
