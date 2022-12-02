import { ReactNode } from 'react';

import { AlternativeProps } from '../../Mock/types';

export interface QuizProviderProps {
  correctAnswers: number;
  wasAnswered: boolean;
  currentQuestionNumber: number;
  handleAnswerQuestion: (alternative: AlternativeProps, questionType: string) => void;
  handleNextQuestion: () => void;
}

export type IQuizProvider = {
  children: ReactNode;
};
