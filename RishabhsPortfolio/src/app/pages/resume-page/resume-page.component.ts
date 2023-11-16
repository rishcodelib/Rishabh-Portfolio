import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.sass'],
})
export class ResumePageComponent implements OnInit {
  constructor() {}

  classChange = '';
  ngOnInit(): void {
    this.classChange = 'bg-transparent navbar-light fixed-top';
  }
}
