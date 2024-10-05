import { AnswerSchema } from './answer.interface';
import { ExplanationSchema } from './explanation.interface';

export interface Question {
  statement: string;
  correctAnswer: AnswerSchema;
  wrongAnswer: AnswerSchema;
  explanation: ExplanationSchema;
  audience: string;
  topic: string;
  id: string;
}
