import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.sass'],
})
export class ProjectCarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  project = [
    {
      key: 1,
      name: 'Project1',
      description: 'project_description',
      date: '12-12-12',
    },
    {
      key: 2,
      name: 'Project2',
      description: 'project_description',
      date: '12-12-12',
    },
    {
      key: 3,
      name: 'Project3',
      description: 'project_description',
      date: '12-12-12',
    },
  ];
}
