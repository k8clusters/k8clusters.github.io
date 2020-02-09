import { Component, OnInit } from '@angular/core';
import { User, UsersService, Configuration} from '@amitkshirsagar13/user-auth-service';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { stringify } from 'querystring';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userName', 'firstName', 'lastName'];
  dataSource: MatTableDataSource<User>;
  config = new Configuration();
  users: User[];

  private usersService: UsersService;
  constructor(private httpClient: HttpClient, private userService: UserService) {
  }

  ngOnInit() {
    this.config.basePath = '/authApi/api';
    this.userService.listUsers().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);
      console.log(this.users)
    });
  }
}
