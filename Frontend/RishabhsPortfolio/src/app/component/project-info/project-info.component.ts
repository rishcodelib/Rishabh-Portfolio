import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetFromUrlService } from 'src/app/service/getFromUrl/get-from-url.service';
import { AllProjectsService } from 'src/app/service/projects/all-projects.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.sass'],
})
export class ProjectInfoComponent implements OnInit {
  id: string | undefined = '6314b3a06b629c689bf74a1f';
  products: any = [];
  // ProjectList: any | undefined;
  constructor(public mp: AllProjectsService) {
  }
  prjList: undefined;
  ngOnInit() {
    this.mp.getProject(this.id).subscribe((res) => {
      // console.log(res);
      this.products =JSON.parse(JSON.stringify(res));
      console.log(this.products);
    });
  }
}
