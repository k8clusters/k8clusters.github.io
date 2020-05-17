import { Component, OnInit, Input } from '@angular/core';
import { QA, Choice } from '@amitkshirsagar13/qa-server';

@Component({
  selector: 'app-exam-qa',
  templateUrl: './exam-qa.component.html',
  styleUrls: ['./exam-qa.component.scss']
})
export class ExamQaComponent implements OnInit {

  @Input() examQa: QA;
  @Input() examQaIndex: number;

  TEXTTYPE = QA.QTypeEnum.TEXTTYPE;
  BOOLTYPE = QA.QTypeEnum.BOOLTYPE;
  MULTTYPE = QA.QTypeEnum.MULTTYPE;

  constructor() {
  }

  ngOnInit() {
    console.log("ExamQaComponent:ngOnInit: "+this.examQa);
  }

  public onChoiceSelection = (selectionValue: number) => {
    this.examQa.selectionCounter = 0;
    if (this.examQa.validated) {
      this.initAnswer();
    }
    this.examQa.choices.forEach((choice) => {
      this.processSelectionCounter(choice, selectionValue);
    });
    this.examQa.choices.forEach((choice) => {
      this.processDisableChoices(choice, selectionValue);
    });
  }

  private processSelectionCounter = (choice: Choice, selectionValue: number) => {
    if (choice.checked) {
      this.examQa.selectionCounter = this.examQa.selectionCounter + 1;
    }
  }

  private processDisableChoices = (choice: Choice, selectionValue: number) => {
    if (!(this.examQa.selectionCounter < this.examQa.maxSelection) && !choice.checked) {
      choice.disabled = true;
    } else {
      choice.disabled = false;
    }
  }

  private initAnswer = () => {
    this.examQa.submitted = false;
    this.examQa.revealed = false;
    this.examQa.validated = false;
    this.examQa.point = 0;
    this.examQa.selectionCounter = 0;
    this.examQa.choices.forEach((choice) => {
      choice.checked = false;
      choice.disabled = false;
    });
  }

  public validate() {
    if (this.examQa.selectionCounter > 0) {
      this.examQa.validated = true;
      this.examQa.choices.forEach(choice => {
        if (choice.checked === true && choice.correct && !(this.examQa.point == -1)) {
          this.examQa.point = 1;
        } else if (choice.checked === true) {
          this.examQa.point = -1;
        }
      });
      if (this.examQa.point === 1) {
        this.examQa.revealed = true;
        this.examQa.choices.forEach(choice => {
          choice.hintVisible = choice.correct;
        });
      } else {
        this.examQa.revealed = false;
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
    return this.examQa.point > 0;
  }
}
