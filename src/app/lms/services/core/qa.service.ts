import { Injectable } from '@angular/core';
import { QaControllerService, QA } from '@amitkshirsagar13/qa-server';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../core/service/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QaService {
  qaCount: number = 10;

  private qaIndex: number = 0;

  private qaIndexSubject: BehaviorSubject<number> = new BehaviorSubject(this.qaIndex);
  currentQaIndex: Observable<number> = this.qaIndexSubject.asObservable();
  
  private qaTest: QA[];


  getQaTest = () => {
    return this.qaTest;
  }

  getNewTest = () => {
    this.listQAs(5).subscribe(data => {
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

  private qaControllerService: QaControllerService;
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.qaControllerService = new QaControllerService(httpClient, '/qaApi/api', authService.getConfiguration());
    this.qaControllerService.defaultHeaders = this.qaControllerService.defaultHeaders.append('Authorization', this.authService.getAccessToken());
  }

  public listQAs(qaCount: number = 5):Observable<QA[]> {
    return this.qaControllerService.getQaList(qaCount);
  }

  public postQA(qa: QA):Observable<QA> {
    return this.qaControllerService.postQa(qa);
  }
}