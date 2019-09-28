import { Component, OnInit } from '@angular/core';
import { QaTestSampleGenService } from 'src/app/services/lms/qa-test-sample-gen.service';
import { QA } from 'src/app/shared/typings/model/qA';

@Component({
  selector: 'app-qa-test',
  templateUrl: './qa-test.component.html',
  styleUrls: ['./qa-test.component.scss']
})
export class QaTestComponent implements OnInit {

  constructor(private qaTestSampleGenService: QaTestSampleGenService) { }

  ngOnInit() {
    this.qaTest = this.qaTestSampleGenService.getQaTest(2);
    console.log(JSON.stringify(this.qaTest));
    this.testQa = JSON.stringify(this.qaTest);
  }

  private qaTest: QA[];
  public testQa: string;

  public getQaTest = () => {
    return JSON.stringify(this.qaTest);
  } 
}
