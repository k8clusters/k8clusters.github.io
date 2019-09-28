import { Component, OnInit } from '@angular/core';
import { MatRadioChange, MatRadioButton } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { QuestionType } from 'src/app/shared/typings/model/questionType';
import { QA } from 'src/app/shared/typings/model/qA';
import { Answer } from 'src/app/shared/typings/model/answer';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  qType = QuestionType;
  qa: QA = {
    "id": "1", "question": "Who are you?",
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

  public onChoiceSelection = (selectionValue: number) => {
    this.qa.selectionCounter = 0;
    if (this.qa.validated) {
      this.initAnswer();
    }
    this.qa.choices.forEach((choice) => {
      this.processSelectionCounter(choice, selectionValue);
    });
    this.qa.choices.forEach((choice) => {
      this.processDisableChoices(choice, selectionValue);
    });
  }

  private processSelectionCounter = (choice: Answer, selectionValue: number) => {
    if (choice.checked) {
      this.qa.selectionCounter = this.qa.selectionCounter + 1;
    }
  }

  private processDisableChoices = (choice: Answer, selectionValue: number) => {
    if (!(this.qa.selectionCounter < this.qa.maxSelection) && !choice.checked) {
      choice.disabled = true;
    } else {
      choice.disabled = false;
    }
  }

  private initAnswer = () => {
    console.log('init: '+this.qa);
    this.qa.submitted = false;
    this.qa.revealed = false;
    this.qa.validated = false;
    this.qa.point = 0;
    this.qa.selectionCounter = 0;
    this.qa.choices.forEach((choice) => {
      choice.checked = false;
      choice.disabled = false;
    });
  }

  public validate() {
    if (this.qa.selectionCounter > 0) {
      this.qa.validated = true;
      this.qa.choices.forEach(choice => {
        if (choice.checked === true && choice.correct && !(this.qa.point == -1)) {
          this.qa.point = 1;
        } else if (choice.checked === true ) {
          this.qa.point = -1;
        }
      });
      if (this.qa.point === 1) {
        this.qa.revealed = true;
        this.qa.choices.forEach(choice => {
          choice.hintVisible = choice.correct;
        });
      } else {
        this.qa.revealed = false;
      }
    }
  }

  arraysEqual(a: any[], b: any[]) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
    a = a.sort();
    b = b.sort();
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  isAnswerCorrect() {
    return this.qa.point > 0;
  }

  public getChoice(pIndex: number, pValue: string, pCorrect: boolean, pHint?: string, pHintVisible?:boolean, pVisible: boolean = true): Answer {
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
