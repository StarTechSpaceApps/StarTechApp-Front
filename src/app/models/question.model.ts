import { AnswerSchema } from './answer.interface';
import { ExplanationSchema } from './explanation.interface';

export interface Question {
  id: string;
  statement: string;
  correctAnswer: AnswerSchema;
  wrongAnswer: AnswerSchema;
  explanation: ExplanationSchema;
  audience: string;
  topic: string;
}
