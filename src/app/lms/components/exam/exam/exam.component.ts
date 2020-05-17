import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitExam() {
    console.log("Submit Exam to Server on timer!!!");
  }

}
