import { QuestionType } from 'src/app/shared/enums/lms/questionType';
import { Base } from '../../../base.model';
import { Option } from './option.model';

export interface Qa extends Base {
    question: string;
    correctAnswer?: any[];
    options?: Option[];
    type: QuestionType;
    answer?: any[];
    anwsered?: Boolean;
  }