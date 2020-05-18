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
  private examQa: QA;

  constructor(private qaService: QaService) { 
  }

  ngOnInit() {
    this.qaService.listQAs(10).subscribe(qaList => {
      let index = 1;
      qaList.forEach(item=>item.index = index++);
      this.examQaList = qaList;
      if (this.examQaList) {
        this.examQaCount = this.examQaList.length;
        this.examQa = this.examQaList[0];
      }
      console.log("Exam Qa Count: " + this.examQaList);
    });
  }

  indexSelection(indexNumber: number) {
    this.examQaIndex = indexNumber;
    this.examQa = this.examQaList.find(item => item.index === indexNumber);
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
      this.examQa = this.examQaList[this.examQaIndex];
    }
  }

  backQaIndex() {
    if (0 < this.examQaIndex) {
      this.examQaIndex--;
      this.examQa = this.examQaList[this.examQaIndex];
    }
  }

}
