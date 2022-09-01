import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass'],
})
export class SigninComponent implements OnInit {
  classChange: any;
  signinForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signinForm.value);
    console.log(this.signinForm);
  }

  constructor() {}

  ngOnInit(): void {
    this.classChange = 'bg-transparent navbar-light fixed-top';
  }
}
