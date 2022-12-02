export type AlternativeProps = {
  isCorrectAnswer: boolean;
  name: string;
};

export type QuestionsType = {
  url_image: string;
  title: string;
  alternatives: AlternativeProps[];
};

export type QuizType = {
  type: string;
  questions: QuestionsType[];
};
