import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User } from '@amitkshirsagar13/user-auth-service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  users: User[];

  headers: HttpHeaders = new HttpHeaders()
  .append('Authorization', this.authService.getAccessToken());
  options = {
    headers: this.headers,
  }
  public listUsers():Observable<User[]> {
    return this.httpClient.get<User[]>('/authApi/api/users', this.options);
  }
}
