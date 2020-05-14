import { Component, OnInit, Input } from '@angular/core';

import { Choice, QA } from '@amitkshirsagar13/qa-server';

@Component({
  selector: 'app-multi-choice-editor',
  templateUrl: './multi-choice-editor.component.html',
  styleUrls: ['./multi-choice-editor.component.scss']
})
export class MultiChoiceEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.addNewChoice();
  }

  @Input() choices: Choice[] = [];
  @Input() qType: QA.QTypeEnum;
  @Input() maxSelection: number;

  public addNewChoice() {
    let choice: Choice = this.newChoice();
    choice.index = this.choices.length;
    this.choices.push(choice);
    console.log(JSON.stringify(this.choices));
  }

  public resetChoices() {
    console.log("Reseting Choices");
    while (this.choices.length < 2) {
      this.addNewChoice();
    }
    if (this.qType === QA.QTypeEnum.BOOLTYPE && this.qType.length > 2) {
      this.choices.splice(2);
    } else if (this.qType === QA.QTypeEnum.TEXTTYPE && this.qType.length > 1) {
      this.choices.splice(1);
      this.choices[0].correct = true;
    }
  }
  
  public processAnswer(choice: Choice) {
    if (this.qType === QA.QTypeEnum.BOOLTYPE) {
      this.choices.forEach(item => {
        if (choice.index === item.index) {
          item.correct = choice.correct;
        } else {
          item.correct = !choice.correct;
        }
      });
    }
  }

  public newChoice(): Choice {
    let choice: Choice = {
      "index": -1,
      "value": "",
      "correct": false,
      "hint": ""
    };
    return choice;
  }
}
