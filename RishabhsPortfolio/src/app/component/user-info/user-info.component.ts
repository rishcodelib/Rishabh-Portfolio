import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entity/User/user';
import { UserServiceService } from 'src/app/service/user-service/user-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass'],
})
export class UserInfoComponent implements OnInit {
  userList: any;
  id = '630f8bab1fb103217d954815';

  constructor(
    private userve: UserServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userve.getUser(this.id).subscribe((res) => {
      this.userList = res;
    });
    console.log(this.userList)
  }
}
