import { Component, OnInit } from '@angular/core';
import { Qa } from 'src/app/shared/models/lms/test/qa/qa.model';
import { QuestionType } from 'src/app/shared/enums/lms/questionType';
import { MatRadioChange, MatRadioButton } from '@angular/material/radio';
import { Option } from 'src/app/shared/models/lms/test/qa/option.model';

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
  qa: Qa = { "id": "1", "question": "Whoami?", "options": [this.getOption(1, "Amit"), this.getOption(2, "Poonam"), this.getOption(3, "Amogh"), this.getOption(4, "Not Sure")], "correctAnswer": ["4"], "type": QuestionType.multAType, }

  public onChange(mrChange: MatRadioChange) {
    if (!this.qa.answer) {
      this.qa.answer = [];
    }
    if (this.qa.answer.indexOf(mrChange.value)==-1) {
      if (this.qa.type == QuestionType.multMType || this.qa.answer.length < 1) {
        this.qa.answer.push(mrChange.value);
      } else {
        this.qa.answer = [];
        this.qa.answer.push(mrChange.value);
      }
    }
    if (this.arraysEqual(this.qa.answer, this.qa.correctAnswer)) {
      console.log(this.qa.answer);
      if (!this.qa.point) {
        this.qa.point = 0;
      }
      this.qa.point = this.qa.point + 1;
    }
  }

  arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

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
