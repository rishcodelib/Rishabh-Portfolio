import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-tag',
  templateUrl: './project-tag.component.html',
  styleUrls: ['./project-tag.component.sass'],
})
export class ProjectTagComponent implements OnInit {
  @Input() tag: any;
  constructor() {}

  ngOnInit(): void {}
}
