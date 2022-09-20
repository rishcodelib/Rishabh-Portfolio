import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/entity/User/user';
import { UserServiceService } from 'src/app/service/user-service/user-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass'],
})
export class SigninComponent implements OnInit {
  user!: User;
  signinForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private uServe: UserServiceService) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.uServe.signIn(this.user).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err.error);
      }
    );
    console.warn(this.signinForm.value);
    console.log(this.signinForm);
  }
  ngOnInit(): void {}
}
