import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css'],
})
export class ProjectCarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  customOptions: OwlOptions = {
    loop: true,
    items:2,
    autoplay:true,
    center:true,
    mergeFit:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    smartSpeed:300,
    dots: true,
    navSpeed: 20,
    navText: ['',''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  slidesStore = [
    {
      id: 1,
      src: '../assets/img/erp_portal.png',
      alt: 'Project1',
      title: 'ERP Portal',
      link:'https://www.github.com/rishcodelib'
    },
    {
      id: 2,
      src: '../assets/img/justified_code.png',
      alt: 'Project2',
      title: 'Justified Code',
      link: 'https://www.github.com/rishcodelib/justified-code'
    },
    {
      id: 3,
      src: '../assets/img/travel_route.png',
      alt: 'Project3',
      title: 'The Travel Route',
      link:'https://www.github.com/rishcodelib'
    }
  ];

  activeSlides: SlidesOutputData;

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    // console.log(this.activeSlides);
  }

  ProjectClick(id){
    alert(`${id} Thanks For Visiting my Project, \n https:www.github.com/rishcodelib`);
  }

}
