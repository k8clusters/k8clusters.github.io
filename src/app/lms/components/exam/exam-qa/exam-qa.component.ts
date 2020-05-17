import { Component, OnInit, Input } from '@angular/core';
import { QA } from '@amitkshirsagar13/qa-server';

@Component({
  selector: 'app-exam-qa',
  templateUrl: './exam-qa.component.html',
  styleUrls: ['./exam-qa.component.scss']
})
export class ExamQaComponent implements OnInit {

  @Input() examQa: QA;
  @Input() examQaIndex: number;

  constructor() {
  }

  ngOnInit() {
  }

}
