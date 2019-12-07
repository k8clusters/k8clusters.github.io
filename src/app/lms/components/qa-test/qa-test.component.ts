import { Component, OnInit } from '@angular/core';
import { QaTestService } from '../../services/core/qa-test.service';

@Component({
  selector: 'app-qa-test',
  templateUrl: './qa-test.component.html',
  styleUrls: ['./qa-test.component.scss'],
})
export class QaTestComponent implements OnInit {

  constructor(private qaTestService: QaTestService) {
    this.qaTestService.currentQaIndex.subscribe(qaIndex => {
      this.qaIndex = qaIndex;
    });
  }

  ngOnInit() {
  }

  public qaIndex: number;

  newTest = () => {
    this.qaTestService.getNewTest();
  }

  next = () => {
    this.qaTestService.nextQaIndex();
  }

  back = () => {
    this.qaTestService.backQaIndex();
  }

  qaCount = (): number => {
    return this.qaTestService.getQaTest().length - 1;
  }

}
