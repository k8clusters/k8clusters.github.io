import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { QA } from '@amitkshirsagar13/qa-server';

@Component({
  selector: 'app-exam-overview',
  templateUrl: './exam-overview.component.html',
  styleUrls: ['./exam-overview.component.scss']
})
export class ExamOverviewComponent implements OnInit {

  @Input() examQaList: QA[];
  @Input() examQaIndex: number;
  @Output() indexSelection = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.markClassForQas();
  }

  markClassForQas() {
    this.qaClassName = [];
    this.examQaList.forEach(item => {
      this.qaClassName.push(this.pushQaCorrectClass(item));
    });
  }

  pushQaCorrectClass(item: QA): string {
    let className = 'question-map__not-visited'

    if (item.markedForReview && item.selectionCounter) {
      className = "question-map__review-answered";
    } else if (item.selectionCounter > 0) {
      className = "question-map__answered";
    } else if (item.markedForReview) {
      className = "question-map__review";
    } else if (item.viewed) {
      className = "question-map__not-answered";
    } else if (item.attempted) {
      className = "question-map__attempt-icon";
    }

    return className;
  }

  selectQuestionIndex(item) {
    this.indexSelection.emit(item.index);
    this.markClassForQas();
  }

  classNameList: string[] = [
    "question-map__not-visited",
    "question-map__attempt-icon",
    "question-map__review",
    "question-map__review-answered",
    "question-map__answered",
    "question-map__not-answered"];

  qaClassName: string[] = [];

  getQaOverviewClass(qa: QA): string {
    let className: string = 'question-map__not-visited';
    let qaItem: QA = this.examQaList.find(item => item.id == qa.id);
    if (qaItem) {
      className = qaItem.selectionCounter > 0 ? 'question-map__answered' : className;
    }
    return className;
  }

}
