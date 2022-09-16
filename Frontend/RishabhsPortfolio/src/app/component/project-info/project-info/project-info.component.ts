import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllProjectsService } from 'src/app/service/projects/all-projects.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.sass'],
})
export class ProjectInfoComponent implements OnInit {
  id: string | undefined;
  constructor(
    private route: ActivatedRoute,
    private pserve: AllProjectsService,
    public mp: AllProjectsService
  ) {}
  prjList: any;

  public src: any;
  public title: any;
  public desc: any;
  public url: any;
  public git: any;
  public tag: any;
  item: any;
  ngOnInit() {
    this.route.queryParams.subscribe((res) => {
      this.id = res['key'];
      console.log(this.id);
    });
    this.mp.getAllProjects().forEach((myproj: any) => {
      this.title = myproj.projectName;
      this.src = myproj.imgSrc;
      this.desc = myproj.description;
      this.url = myproj.liveurl;
      this.git = myproj.gitUrl;
      this.tag = myproj.tag;
    });
  }
}
