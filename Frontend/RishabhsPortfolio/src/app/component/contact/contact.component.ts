import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  firstName: any;
  lastName: any;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.log(this.profileForm);
  }

  constructor() {}

  ngOnInit(): void {}
}
