import { Component, OnInit } from '@angular/core';
import { QaService } from '../../services/core/qa.service';

@Component({
  selector: 'app-qa-test',
  templateUrl: './qa-test.component.html',
  styleUrls: ['./qa-test.component.scss'],
})
export class QaTestComponent implements OnInit {

  constructor(private qaService: QaService) {
    this.qaService.currentQaIndex.subscribe(qaIndex => {
      this.qaIndex = qaIndex;
    });
  }

  ngOnInit() {
  }

  public qaIndex: number;

  newTest = () => {
    this.qaService.getNewTest();
  }

  next = () => {
    this.qaService.nextQaIndex();
  }

  back = () => {
    this.qaService.backQaIndex();
  }

  qaCount = (): number => {
    let iCount = 1;
    if (this.qaService.getQaTest()) {
      iCount = this.qaService.getQaTest().length;
    }
    return iCount - 1;
  }

}
