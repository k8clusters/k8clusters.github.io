import { Component, OnInit } from '@angular/core';
import { QA, Choice } from '@amitkshirsagar13/qa-server';
import { QaService } from '../../services/core/qa.service';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QaComponent implements OnInit {

  constructor(private qaService: QaService) {
  }

  private qaIndex: number = 0;

  ngOnInit() {
    this.qaService.currentQaIndex.subscribe(qaIndex => {
      this.qaIndex = qaIndex;
      this.qaService.listQAs(5).subscribe( data => {
        this.qa = data[this.qaIndex];
      });
    });
  }

  TEXTTYPE = QA.QTypeEnum.TEXTTYPE;
  BOOLTYPE = QA.QTypeEnum.BOOLTYPE;
  MULTTYPE = QA.QTypeEnum.MULTTYPE;
  
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

  private processSelectionCounter = (choice: Choice, selectionValue: number) => {
    if (choice.checked) {
      this.qa.selectionCounter = this.qa.selectionCounter + 1;
    }
  }

  private processDisableChoices = (choice: Choice, selectionValue: number) => {
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
        } else if (choice.checked === true) {
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
