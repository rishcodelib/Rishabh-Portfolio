import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass'],
})
export class ResumeComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  classChange = '';
  ngOnInit(): void {
    this.classChange = 'bg-transparent navbar-light fixed-top';
  }
}
