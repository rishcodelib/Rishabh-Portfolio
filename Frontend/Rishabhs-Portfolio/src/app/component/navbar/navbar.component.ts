import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event']) onWindowScroll($event) {
    const element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.remove('bg-transparent');
      element.classList.remove('navbar-dark');
      element.classList.add('bg-light');
      element.classList.add('navbar-light');
    } else {
      element.classList.add('bg-transparent');
      element.classList.add('navbar-dark');
      element.classList.remove('bg-light');
      element.classList.remove('navbar-light');
    }
  }
}
