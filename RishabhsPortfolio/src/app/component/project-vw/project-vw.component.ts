import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/entity/project/project';
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
  addNewProject() {
    window.location.href = 'add-project';
  }
  onDelete(id: any): void {
    console.log('Req Recievd in Com to delete id = ' + id);
    this.projServe.deleteProject(id);
  }
  onEdit(id: any): void {
    console.log('Req Recievd in Com to delete id = ' + id);
    this.projServe.deleteProject(id);
  }
}
