import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { User } from 'src/app/entity/User/user';
import { UserServiceService } from 'src/app/service/user-service/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
})
export class SignupComponent implements OnInit {
  signupForm = new UntypedFormGroup({
    firstName: new UntypedFormControl(''),
    lastName: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
    contact: new UntypedFormControl(''),
  });

  constructor(private uServe: UserServiceService) {}
  ngOnInit(): void {}

  user!: User;
  onSubmit() {
    this.user = this.signupForm.value;
    console.log(this.user);
    this.uServe.createUser(this.user).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err.message);
      }
    );
    // window.location.href='/users'
  }
}
