import { QuestionType } from 'src/app/shared/enums/lms/questionType';
import { Base } from '../../../base.model';

export interface Qa extends Base {
    question: string;
    correctAnswer?: string;
    options?: string[];
    type: QuestionType;
  }