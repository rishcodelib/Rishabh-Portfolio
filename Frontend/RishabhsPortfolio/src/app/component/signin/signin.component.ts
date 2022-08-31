import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass'],
})
export class SigninComponent implements OnInit {
  classChange: any;

  constructor() {}

  ngOnInit(): void {
    this.classChange = 'bg-transparent navbar-light fixed-top';
  }
}
