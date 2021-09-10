import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onSkillScroll($event) {
 
    const web_des = document.querySelector('.web_des') as HTMLElement;
    const brand = document.querySelector('.brand') as HTMLElement;
    const web_dev = document.querySelector('.web_dev') as HTMLElement;
    const marketing = document.querySelector('.marketing') as HTMLElement;
    if (window.pageYOffset > web_des.clientHeight) {
      web_des.style.width="90%";
      brand.style.width="85%";
      web_dev.style.width="95%";
      marketing.style.width="80%";
      // console.log(element);
    } else {
      web_des.style.width="0%";
      brand.style.width="0%";
      web_dev.style.width="0%";
      marketing.style.width="0%";
    }
  }

}
