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
  products: any;
  key: any;

  constructor(private mp: AllProjectsService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let param = params.get('key');
      this.key = param;
      console.log('Key: ' + param);
    });

    this.mp.getProject(this.key).subscribe(
      (res: any) => {
        this.products = res;
        console.log('value in products' + res);
      },
      (err: any) => {
        console.log(err);
        this.products = null;
      }
    );
  }
}
