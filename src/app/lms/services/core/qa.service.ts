import { Injectable } from '@angular/core';
import { QaControllerService, QA } from '@amitkshirsagar13/qa-server';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../core/service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QaService {
  private qaControllerService: QaControllerService;
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.qaControllerService = new QaControllerService(httpClient, '/qaApi/api', authService.getConfiguration());
    this.qaControllerService.defaultHeaders = this.qaControllerService.defaultHeaders.append('Authorization', this.authService.getAccessToken());
  }

  public listQAs():Observable<QA[]> {
    return this.qaControllerService.getQaList(5);
  }

  public postQA(qa: QA):Observable<QA> {
    return this.qaControllerService.postQa(qa);
  }
}