import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange, MatRadioChange } from '@angular/material';
import { Choice, QA } from '@amitkshirsagar13/qa-server';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() inputModel: Choice;
  @Input() qType: QA.QTypeEnum;
  @Input() maxSelection: number;
  @Output() correctAnswerMarked = new EventEmitter();
  
  public editorMode: boolean = true;

  public toggleEditor() {
    this.editorMode = !this.editorMode;
  }

  public changeCheckBox(event: MatCheckboxChange) {
    this.inputModel.correct = event.checked;
  }

  public changeRadio(event: MatRadioChange) {
    this.inputModel.correct = event.source.checked;
    this.correctAnswerMarked.emit(this.inputModel);
  }

}
