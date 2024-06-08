import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { of } from 'rxjs';

import { AllProjectsService } from 'src/app/service/projects/all-projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.sass'],
})

export class NewProjectComponent implements OnInit {
  al_head: any | undefined;
  al_desc: any | undefined;
  projForm = new UntypedFormGroup({
    projectName: new UntypedFormControl(''),
    shortName: new UntypedFormControl(''),
    category: new UntypedFormControl(''),
    description: new UntypedFormControl(''),
    techStack: new UntypedFormControl(''),
    git: new UntypedFormControl(''),
    demo: new UntypedFormControl(''),
    status: new UntypedFormControl(''),
    key: new UntypedFormControl(''),
    live: new UntypedFormControl(''),
  });
  constructor(private pServe: AllProjectsService) {}
  // newProject: '';
  ngOnInit(): void {}

  onSubmit() {
    let payload = JSON.stringify(this.projForm.value);
    this.pServe.createProject(JSON.parse(payload)).subscribe(
      (res) => {
        console.log(res);
      },
      (response) => {
        if ((response.status = 200)) {
          this.al_head = 'success';
          this.al_desc = response.error.text;
        } else {
          console.log(response.error);
          this.al_head = 'error';
          this.al_desc = response.error;
        }
      }
    );
    window.location.href = '/projects';
  }
}
