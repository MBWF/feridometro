import { useContext } from 'react';

import { QuizProvider } from '.';
import { QuizProviderProps } from './types';

export function useQuiz() {
  const context: QuizProviderProps = useContext(QuizProvider);

  return context;
}
