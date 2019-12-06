import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'k8cluster';

  constructor(public authService: AuthService) {
  }
  ngOnInit() {
    this.authService.handleAuthentication().subscribe(userAuthenticated => {
      if (userAuthenticated) {
      } else {
      }
    });
  }

}
