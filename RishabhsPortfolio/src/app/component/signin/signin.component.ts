import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private uServe: UserServiceService, private router: Router) {}

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   this.uServe.signIn(this.signinForm.value).subscribe(
  //     (res) => {
  //       // console.log(res);
  //       let id = JSON.parse(JSON.stringify(res))._id;
  //       localStorage.setItem('login', id);
  //       this.router.navigate(['/users'])
  //     },
  //     (err) => {
  //       console.log(err.error);
  //       localStorage.removeItem('login');
        
  //     }
  //   );
  // }
  ngOnInit(): void {}
}
