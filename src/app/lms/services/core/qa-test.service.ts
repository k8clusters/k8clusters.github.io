import { Injectable } from '@angular/core';
import { QaTestSampleGenService } from '../mock/qa-test-sample-gen.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { AuthService } from '../../../core/service/auth.service';
import { QA } from '@amitkshirsagar13/qa-server';
import { QaService } from './qa.service';

@Injectable({
  providedIn: 'root'
})
export class QaTestService {
  serviceName: string = 'qaservice';
  servicePort: number = 2002;
  qaCount: number = 10;

  constructor(private qaService: QaService, private authService: AuthService, private httpClient: HttpClient) {
    this.qaService.listQAs().subscribe(data => {
      this.qaTest = data;
    });
    this.getQaTestFromService(5).subscribe(data => {
      this.qaTest = data;
    });
    this.qaIndex = 0;
  }

  private qaTest: QA[];

  private qaIndex: number;
  private qaIndexSubject: BehaviorSubject<number> = new BehaviorSubject(this.qaIndex);
  currentQaIndex: Observable<number> = this.qaIndexSubject.asObservable();

  getQaTest = () => {
    return this.qaTest;
  }

  getNewTest = () => {
    this.getQaTestFromService(5).subscribe(data => {
      this.qaTest = data;
    });
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

  getQaTestFromService = (qaCount: number = 10) => {
    let header = new HttpHeaders();
    header = header.set('Authorization', this.authService.getAccessToken());
    return this.qaService.listQAs();
  }
}
