import { ArrayType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AllProjectsService } from 'src/app/service/projects/all-projects.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass'],
})
export class ProjectCardComponent implements OnInit {
  @Input() public pservice: any;
  value: undefined | any;
  ngOnInit(): void {
    console.log("VALUE is" +this.value);
  }
  
  constructor(public mp: AllProjectsService) {
    this.value = this.mp.getAllProjects().subscribe(
      (res: any) => {
        this.value = res;
        console.log(res);
      },
      (err: any) => {
        console.log(err);
        this.value = null;
      }
    );
  }
}
