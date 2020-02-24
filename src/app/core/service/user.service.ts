import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User, UsersService } from '@amitkshirsagar13/user-auth-service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersService: UsersService
  constructor(private httpClient: HttpClient, private authService: AuthService) { 
    this.usersService = new UsersService(httpClient, '/authApi/api/users')
  }

  public listUsers():Observable<User[]> {
    this.usersService.defaultHeaders.append('Authorization', this.authService.getAccessToken());
    return this.usersService.listUsers();
  }
}
