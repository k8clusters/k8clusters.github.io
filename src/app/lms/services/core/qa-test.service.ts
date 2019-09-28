import { Injectable } from '@angular/core';
import { QaTestSampleGenService } from '../mock/qa-test-sample-gen.service';
import { QA } from 'src/app/shared/typings/model/qA';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QaTestService {

  constructor(private qaTestSampleGenService: QaTestSampleGenService) { 
    this.qaTest = this.qaTestSampleGenService.getQaTest();
    this.qaIndex = 0;
  }

  private qaTest: QA[];

  private qaIndex: number;
  private qaIndexSubject: BehaviorSubject<number> = new BehaviorSubject(this.qaIndex);
  currentQaIndex: Observable<number> = this.qaIndexSubject.asObservable();

  getQaTest = () => {
    return this.qaTest;
  }

  nextQaIndex() {
    if (this.qaIndex < this.qaTest.length - 1) {
      this.qaIndex++;
      this.qaIndexSubject.next(this.qaIndex);
    }
  }

  backQaIndex() {
    if (0 < this.qaIndex) {
      this.qaIndex--;
      this.qaIndexSubject.next(this.qaIndex);
    }
  }
}
