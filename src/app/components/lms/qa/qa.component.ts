import { Component, OnInit } from '@angular/core';
import { Qa } from 'src/app/shared/models/lms/test/qa/qa.model';
import { QuestionType } from 'src/app/shared/enums/lms/questionType';
import { MatRadioChange, MatRadioButton } from '@angular/material/radio';
import { Option } from 'src/app/shared/models/lms/test/qa/option.model';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  qaType = QuestionType;
  qa: Qa = {
    "id": "1", "question": "Whoami?",
    "options": [this.getOption(1, "Amit"), this.getOption(2, "Poonam"), this.getOption(3, "Amogh"), this.getOption(4, "Not Sure")],
    "correctAnswer": ["2"],
    "type": QuestionType.multAType,
  }

  public onRadioChange(mrChange: MatRadioChange) {
    this.initAnswer();
    if (this.qa.answer.indexOf(mrChange.value)==-1) {
      if (this.qa.type == QuestionType.multMType || this.qa.answer.length < 1) {
        this.qa.answer.push(mrChange.value);
      } else {
        this.qa.answer = [];
        this.qa.answer.push(mrChange.value);
      }
    }
    this.checkAnswers();
  }

  public onCheckboxChange(mrChange: MatCheckboxChange) {
    this.initAnswer();
    if (mrChange.checked && this.qa.answer.indexOf(mrChange.source.value)==-1) {
      this.qa.answer.push(mrChange.source.value);
    } else if(!mrChange.checked){
      const index = this.qa.answer.indexOf(mrChange.source.value, 0);
      if (index > -1) {
        this.qa.answer.splice(index, 1);
      }
    }
    this.checkAnswers();
  }

  private initAnswer() {
    if (!this.qa.answer) {
      this.qa.answer = [];
    }
  }

  private checkAnswers() {
    if (this.arraysEqual(this.qa.answer, this.qa.correctAnswer)) {
      if (!this.qa.point) {
        this.qa.point = 0;
      }
      this.qa.point = 1;
    } else {
      this.qa.point = 0;
    }
    if (this.qa.answer.length > 0) {
      this.qa.answered = true;
    }
    console.log(this.qa);
  }

  public validate() {
    this.qa.validated = true;
    if (this.qa.answered) {
      if (this.qa.point > 0) {
        this.qa.options.forEach(option => {
          option.show = true;
          if (this.qa.correctAnswer.indexOf(option.index.toString()) > -1) {
            option.status = 'O';
          } else {
            option.status = 'X';
          }
        });
      } else {
        this.qa.options.forEach(option => {
          option.status = null;
        });
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

  isAnswerCorrect(index: string) {
    return this.qa.point > 0;
  }

  public getOption(pIndex, pValue): Option {
    let option = { "index": pIndex, "value": pValue};
    return option;
  }
}
