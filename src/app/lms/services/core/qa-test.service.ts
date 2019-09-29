import { Injectable } from '@angular/core';
import { QaTestSampleGenService } from '../mock/qa-test-sample-gen.service';
import { QA } from 'src/app/shared/typings/model/qA';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QaTestService {
  qaServiceUrl: string = 'http://k8s-qaservice.local.k8cluster.io:8085/k8s/qaservice/qaList/';

  constructor(private qaTestSampleGenService: QaTestSampleGenService, private httpClient: HttpClient) { 
    console.log('QaTestService');
    this.qaTest = [];
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
    header = header.set('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1Njg0NDMwMzUsImV4cCI6MTU5OTk3OTAzNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkFtaXQiLCJTdXJuYW1lIjoiS3NoaXJzYWdhciIsIkVtYWlsIjoiYW1pdC5rc2hpcnNhZ2FyLjEzQGdtYWlsLmNvbSIsIlJvbGUiOlsiQWRtaW4iLCJDRU8iXX0.kGTAnKis7k30Y4K6tvDor7Y6tRkfzQaunlMIoVzC8gc');
    return this.httpClient.get<QA[]>(this.qaServiceUrl + qaCount, {
      headers: header
    });
  }
}
