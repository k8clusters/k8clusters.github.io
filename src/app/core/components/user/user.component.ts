import { Component, OnInit } from '@angular/core';
import { User, UsersService, Configuration} from '@amitkshirsagar13/user-auth-service';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userName', 'firstName', 'lastName'];
  dataSource: MatTableDataSource<User>;
  private usersService: UsersService;
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    const config = new Configuration();
    config.basePath = '/authApi/api';
    config.accessToken = this.authService.getAccessToken();
    
    this.usersService = new UsersService(this.httpClient, '/authApi/api', config);
    let users: User[];
    this.usersService.listUsers().subscribe(data=>{
      users = data;
    });
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
  }
}
