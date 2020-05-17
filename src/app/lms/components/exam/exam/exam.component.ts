import { Component, OnInit } from '@angular/core';
import { QaControllerService, QA } from '@amitkshirsagar13/qa-server';
import { QaService } from '../../../services/core/qa.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  private examQaList: QA[];
  private examQaIndex: number;
  private examQaCount: number;

  constructor(private qaService: QaService) { 
  }

  ngOnInit() {
    this.qaService.listQAs(10).subscribe(qaList => {
      this.examQaList = qaList;
      this.examQaCount = this.examQaList.length;
    });
  }

  getCurrentExamQa(): QA {
    return this.examQaList[this.examQaIndex];
  }

  onSubmitExam() {
    console.log("Submit Exam to Server on timer!!!");
  }


  nextQaIndex() {
    if (this.examQaIndex < this.examQaCount - 1) {
      this.examQaIndex++;
    }
  }

  backQaIndex() {
    if (0 < this.examQaIndex) {
      this.examQaIndex--;
    }
  }

}
