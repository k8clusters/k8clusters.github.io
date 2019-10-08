import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signIn: string = 'http://localhost:2001/signin';
  private jwt: string = 'http://localhost:2001/jwt';

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  model: any = {};

  authenticate(username, password) {
    this.model.username = username;
    this.model.password = password;

    const payload = new HttpParams()
      .set('userName', this.model.username)
      .set('password', this.model.password);

    this.httpClient.post<Observable<Object>>(this.signIn, payload).subscribe(isValid => {
      if (isValid) {
        this.httpClient.get<Observable<any>>(this.jwt).subscribe(body => {
          let data: any = body;
          sessionStorage.setItem(
            'username', this.model.username
          );
          sessionStorage.setItem(
            'token', data.token
          );
        });
        this.router.navigate(['']);
        console.log(this.model.username + ':' + this.model.password);
      } else {
        alert("Authentication failed.")
      }
    });
    return true;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
