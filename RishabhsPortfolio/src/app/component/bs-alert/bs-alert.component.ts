import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-alert',
  templateUrl: './bs-alert.component.html',
  styleUrls: ['./bs-alert.component.sass'],
})
export class BsAlertComponent implements OnInit {
  @Input() al_head: any;
  @Input() al_desc: any;
  @Input() al_class: any;

  constructor() {}

  ngOnInit(): void {
    switch (this.al_head) {
      case 'success':
        this.al_class = ' alert alert-success mt-2';
        break;
      case 'error':
        this.al_class = ' alert alert-danger mt-2';
        break;
      case 'warning':
        this.al_class = ' alert alert-warning mt-2';
        break;
      case 'info':
        this.al_class = ' alert alert-info mt-2 ';
        break;

      default:
        break;
    }
  }
}
