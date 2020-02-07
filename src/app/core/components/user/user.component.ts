import { Component, OnInit } from '@angular/core';
import { User, UserServiceService} from '@amitkshirsagar13/user-auth-service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userName', 'firstName', 'lastName'];
  dataSource:User[];
  constructor(private userService: UserServiceService) { 

    userService.listUsers(null, false).subscribe(userList=>{
      this.dataSource = userList;
    });
  }

  ngOnInit() {
  }
}
