import { Injectable } from '@angular/core';
import { QA } from '../../../shared/typings/model/qA';
import { QuestionType } from '../../../shared/typings/model/questionType';
import { Answer } from '../../../shared/typings/model/answer';

@Injectable({
  providedIn: 'root'
})
export class QaTestSampleGenService {

  constructor() { }


  public getQaTest = (qCount: number = 2): Array<QA> => {
    let qaTest: QA[] = [];
    qaTest.push(this.qa);
    let qa = Object.assign({}, this.qa);
    qa.id = "2";
    qa.question = "Where are u?"
    qaTest.push(qa);
    return qaTest;
  }

  qa: QA = {
    "id": "1",
    "question": "Who are you?",
    "choices": [
      this.getChoice(1, "Amit", false, "Always missing!!!"),
      this.getChoice(2, "Poonam", true, "She is always there!!!"),
      this.getChoice(3, "Amogh", false, "He is Hero!!!"),
      this.getChoice(4, "Not Sure", true, "Who is it?")
    ],
    "qType": QuestionType.MultType,
    "point": 0,
    "selectionCounter": 0,
    "maxSelection": 2
  }

  public getChoice(pIndex: number, pValue: string, pCorrect: boolean, pHint?: string, pHintVisible?: boolean, pVisible: boolean = true): Answer {
    let option: Answer = {
      "index": pIndex,
      "value": pValue,
      "correct": pCorrect,
      "hint": pHint,
      "hintVisible": pHintVisible,
      "visible": pVisible,
      "checked": false,
      "disabled": false
    };
    return option;
  }
}
