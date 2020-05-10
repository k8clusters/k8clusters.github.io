import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { Choice } from '@amitkshirsagar13/qa-server';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() inputModel: Choice = {
    "index": 1,
    "value": "Some Text",
    "correct": false,
    "hint": "Some value is rigth because"
  };
  
  public correctA
  public editorMode: boolean = false;

  public toggleEditor() {
    this.editorMode = !this.editorMode;
  }

  public change(event: MatCheckboxChange) {
    this.inputModel.correct = event.checked;
  }

}
