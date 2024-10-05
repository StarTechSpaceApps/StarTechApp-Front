export interface IQuestion {
  id: string,
  statment: string,
  correctAnswer: string,
  wrongAnswer: string,
  correctImage: string,
  wrongImage: string,
  answerText: string,
  answerLink: string;
  audience: string; //enum
  topic: string //enum
}
