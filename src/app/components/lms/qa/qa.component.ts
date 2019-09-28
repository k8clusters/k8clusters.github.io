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
    "id": "1", "question": "Whoami?",
    "choices": [this.getChoice(1, "Amit", false), this.getChoice(2, "Poonam", true), this.getChoice(3, "Amogh", true), this.getChoice(4, "Not Sure", false)],
    "qType": QuestionType.MultAType,
  }

  public onChoiceSelection = (selectionValue: number) => {
    if (this.qa.submitted) {
      this.initAnswer();
    }

    this.qa.choices.forEach((choice) => {
      this.processSelection(choice, selectionValue);
    });

    if (this.qa.qType == QuestionType.MultAType || !(this.qa.selectionCounter < this.qa.maxSelection)) {
      this.qa.choices.forEach((choice) => {
        choice.disabled = true;
      });
    }
  }

  private processSelection = (choice: Answer, selectionValue: number) => {
    if (choice.index == selectionValue) {
      choice.selected = true;
      this.qa.submitted = true;
    }
  }

  private initAnswer = () => {
    this.qa.submitted = false;
    this.qa.validated = false;
    this.qa.point = 0;
    this.qa.choices.forEach((choice) => {
      choice.selected = false;
    });
  }

  public validate() {
    this.qa.validated = true;
    console.log(this.qa)
    if (this.qa.submitted) {
      this.qa.choices.forEach(choice => {
        if (choice.selected === true && choice.correct === true && this.qa.point != -1) {
          this.qa.point = 1;
        } else if (choice.selected === true && (!choice.correct)){
          this.qa.point = -1;
        }
      });
      if (this.qa.point == 1) {
        this.qa.choices.forEach(choice => {
          choice.revealed = true;
          choice.hintVisible = choice.correct;
        });
      }
    } else {
      this.qa.point = -1;
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
    let option : Answer = { "index": pIndex, "value": pValue, "correct": pCorrect, "hint": pHint, "hintVisible": pHintVisible, "visible": pVisible};
    return option;
  }
}
