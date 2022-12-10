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
  id: string | null | undefined;
  products: any = [];
  key: any;
  prjList: undefined;

  constructor(private mp: AllProjectsService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let param = params.get('key');
      console.log('Key: ' + param);
    });

    this.getProjectData();
  }

  private getProjectData() {
    this.mp.getProject(this.id).subscribe((res) => {
      // console.log(res);
      this.products = JSON.parse(JSON.stringify(res));
      console.log(this.products);
    });
  }
}
