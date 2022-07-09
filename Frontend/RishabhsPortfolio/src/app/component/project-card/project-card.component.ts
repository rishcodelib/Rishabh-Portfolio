import { ArrayType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AllProjectsService } from 'src/app/service/projects/all-projects.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass'],
})
export class ProjectCardComponent implements OnInit {
  public src: any;
  public title: any;
  public desc: any;
  public url: any;
  public git: any;
  public tag: any;
  @Input() public pservice: any;
  // const MyProject: Array = JSON.parse(pservice);
  ngOnInit(): void {
  }
  constructor(public mp: AllProjectsService) {
    mp.project.forEach((myproj: any) => {
      this.title = myproj.projectName;
      this.src = myproj.imgSrc;
      this.desc = myproj.description;
      this.url = myproj.liveurl;
      this.git = myproj.gitUrl;
      this.tag = myproj.tag;
      // console.log(myproj);
    });
    console.log(mp);
  }
}

