import { Injectable } from '@angular/core';
import { QaTestSampleGenService } from '../mock/qa-test-sample-gen.service';
import { QA } from 'src/app/shared/typings/model/qA';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { AuthService } from 'src/app/core/service/auth.service';
@Injectable({
  providedIn: 'root'
})
export class QaTestService {
  serviceName: string = 'qaservice';
  servicePort: number = 2002;
  qaCount: number = 10;
  qaServiceUrl: string = `${environment.backend.protocol}${this.serviceName}.${environment.backend.host}:${this.servicePort}/${environment.backend.basePath}`;

  constructor(private qaTestSampleGenService: QaTestSampleGenService, private authService: AuthService, private httpClient: HttpClient) {
    console.log('QaTestService');
    this.qaTest = this.qaTestSampleGenService.getQaTest(10);
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
    return this.httpClient.get<QA[]>(`${this.qaServiceUrl}/qaList/${this.qaCount}`, {
      headers: header
    });
  }
}
