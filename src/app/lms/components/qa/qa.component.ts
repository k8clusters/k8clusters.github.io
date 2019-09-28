import { Component, OnInit } from '@angular/core';
import { QuestionType } from 'src/app/shared/typings/model/questionType';
import { QA } from 'src/app/shared/typings/model/qA';
import { Answer } from 'src/app/shared/typings/model/answer';
import { QaTestService } from '../../services/core/qa-test.service';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QaComponent implements OnInit {

  constructor(private qaTestService: QaTestService) { 
    this.qaTestService.currentQaIndex.subscribe(qaIndex => {
      this.qaIndex = qaIndex;
      this.qa = this.qaTestService.getQaTest()[this.qaIndex];
    });
  }

  ngOnInit() {
  }

  private qaIndex: number;

  qType = QuestionType;
  qa: QA;
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

}
