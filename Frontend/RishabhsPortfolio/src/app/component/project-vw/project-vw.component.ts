import { Component, OnInit } from '@angular/core';
import { AllProjectsService } from 'src/app/service/projects/all-projects.service';

@Component({
  selector: 'app-project-vw',
  templateUrl: './project-vw.component.html',
  styleUrls: ['./project-vw.component.sass'],
})
export class ProjectVWComponent implements OnInit {
  prjList: any;

  constructor(private projServe: AllProjectsService) {}

  ngOnInit(): void {
    this.projServe.getAllProjects().subscribe((res) => {
      this.prjList = res;
    });
  }
}
