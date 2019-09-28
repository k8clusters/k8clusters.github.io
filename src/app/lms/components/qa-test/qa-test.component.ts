import { Component, OnInit } from '@angular/core';
import { QaTestSampleGenService } from '../../services/mock/qa-test-sample-gen.service';
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
    this.next();
  }

  private qaIndex: number;

  next = () => {
    this.qaTestService.nextQaIndex();
  }

  back = () => {
    this.qaTestService.backQaIndex();
  }

}
