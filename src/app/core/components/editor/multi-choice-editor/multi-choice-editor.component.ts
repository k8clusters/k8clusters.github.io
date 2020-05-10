import { Component, OnInit, Input } from '@angular/core';
import { Choice } from '../../../../shared/typings/model/choice';

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

  public addNewChoice() {
    let choice: Choice = this.newChoice();
    choice.index = this.choices.length;
    this.choices.push(choice);
    console.log(JSON.stringify(this.choices));
  }

  public newChoice(): Choice {
    let choice: Choice = {
      "index": -1,
      "value": "Some Text",
      "correct": true,
      "hint": "Some value is rigth because"
    };
    return choice;
  }
}
