import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
})
export class UsersComponent implements OnInit {
  userList: any;
  constructor(private uservice: UserServiceService) {}

  ngOnInit(): void {
    this.uservice.getAllUsers().subscribe((res) => {
      this.userList = res;
    });
  }
  newUser() {
    console.log('Clicked');
  }
  editUser(_id: string) {
    this.uservice.getUser(_id).subscribe((res) => {
      console.log(res);
    });
  }
}
