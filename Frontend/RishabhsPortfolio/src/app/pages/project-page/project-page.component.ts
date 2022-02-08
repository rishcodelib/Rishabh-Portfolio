import { Component, Input, OnInit } from '@angular/core';
import { ProjectServiceService } from 'src/app/service/project-service.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.sass'],
})
export class ProjectPageComponent {
  public pservice = ProjectServiceService;
}
