import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { QA } from '@amitkshirsagar13/qa-server';
import { Event } from '@angular/router';

@Component({
  selector: 'app-exam-overview',
  templateUrl: './exam-overview.component.html',
  styleUrls: ['./exam-overview.component.scss']
})
export class ExamOverviewComponent implements OnInit {

  @Input() examQaList: QA[];
  @Output() indexSelection = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    console.log("ExamOverviewComponent:ngOnInit: "+this.examQaList.length);
  }

  selectQuestionIndex(item) {
    this.indexSelection.emit(item.index);
  }

  classNameList: string[] = [
    "question-map__not-visited",
    "question-map__attempt-icon",
    "question-map__review",
    "question-map__review-answered",
    "question-map__answered",
    "question-map__not-answered"];

  getQaOverviewClass(qa: QA): string {
    let className: string = 'question-map__not-visited';
    let qaItem: QA = this.examQaList.find(item => item.id == qa.id);
    if (qaItem) {
      className = qaItem.selectionCounter > 0 ? 'question-map__answered' : className;
    }
    console.log(className);
    return className;
  }

}
