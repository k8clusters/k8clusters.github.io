import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { from, of, Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { environment } from 'src/environments/environment';
import * as auth0 from 'auth0-js';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string;
  private logoutBusy: boolean = false;

  private readonly ACCESS_TOKEN_PREFIX = 'id_token';
  private readonly SESSION_ID_PREFIX = 'session';
  private readonly CONNECTION_PREFIX = 'sub';
  private readonly LAST_ACTIVITY_PREFIX = 'last_act';
  private readonly CHAT_TOKEN_PREFIX = 'chat_token';

  constructor(private router: Router,
    private httpClient: HttpClient
  ) {
  }

  auth0 = new auth0.WebAuth({
    clientID: environment.clientId,
    domain: environment.authDomain,
    responseType: 'code',
    redirectUri: environment.redirect_url,
    scope: 'openid profile offline_access',
  });

  properties = {
    // audience: environment.authAudience,
  };
  private accessTokenStarted: boolean = false;

  login(redirectPath: string = '/') {
    this.logoutBusy = false;
    this.auth0.authorize(this.properties);
  }

  servicePort: number = 2001;
  authorizationUrl: string = `${environment.backend.protocol}${environment.authService}.${environment.backend.host}:${this.servicePort}/authorization`
  authTokenUrl: string = `${this.authorizationUrl}/authToken`;


  isAuthenticated() {
    let tokenExists = !isNullOrUndefined(this.getAccessToken());
    return tokenExists;
  }

  public handleAuthentication() {
    return Observable.create(observer => {
      // Call when app reloads after user logs in with Auth0
      this.accessTokenStarted = true;
      let url: URL = new URL(window.location.href);
      let grantCode: string = (url.searchParams.get('code'));
      let state: string = (url.searchParams.get('state'));
      if (grantCode && state) {
        let header = new HttpHeaders();
        this.httpClient.get(`${this.authTokenUrl}?code=${grantCode}`, {
          headers: header
        }).subscribe(data => {
          sessionStorage.setItem(this.ACCESS_TOKEN_PREFIX, data['accessToken']);
          this.accessToken = data['accessToken'];
          console.log(JSON.stringify(data));
        });
      }
    })
  }

  /*------------------------------------------------------------//
  // localStorage Getters & Setters.
  //------------------------------------------------------------*/
  getAccessToken() {
    return this.accessToken;
  }
  setAccessToken(token) {
    this.accessToken = token;
  }

  getSessionId() {
    return localStorage.getItem(environment.authDomain + this.SESSION_ID_PREFIX);
  }

  getChatToken() {
    return localStorage.getItem(environment.authDomain + this.CHAT_TOKEN_PREFIX);
  }

  getConnection() {
    return localStorage.getItem(environment.authDomain + this.CONNECTION_PREFIX);
  }

  getUid() {
    return localStorage.getItem(environment.authDomain + 'uid');
  }

  logout() {
    // Ensure Auth0 client instance exists
    // this.auth0.logout();
  }
}
