import { Component, OnInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css'],
})
export class ProjectCarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  Images = [
    '../assets/img/bg.jpg',
    '../assets/img/user.png',
    '../assets/img/logo.png',
  ];
  SlideOptions = { items: 1, dots: true, nav: true };
  CarouselOptions = { items: 3, dots: true, nav: true };
}
