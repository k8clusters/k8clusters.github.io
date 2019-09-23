import { Component, OnInit } from '@angular/core';
import { Qa } from 'src/app/shared/models/lms/test/qa/qa.model';
import { QuestionType } from 'src/app/shared/enums/lms/questionType';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  qaType = QuestionType;
  qa: Qa = { "id": "1", "question": "Whoami?", "options": ["Amit", "Poonam", "Amogh", "Not Sure"], "correctAnswer": "Not Sure", "type": QuestionType.multAType }
}
