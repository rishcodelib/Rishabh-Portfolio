import { Component, OnInit } from '@angular/core';
import { AboutComponent } from 'src/app/component/about/about.component';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AboutComponent
  }

}
