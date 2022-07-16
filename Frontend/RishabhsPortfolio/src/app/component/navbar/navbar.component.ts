import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  classChange = '';
  ngOnInit(): void {
   this.classChange = 'bg-transparent navbar-dark fixed-top';
  }
  navItem = document.getElementsByClassName('navbar');
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      this.classChange = 'bg-light navbar-light fixed-top';
    } else if (
      document.body.scrollTop < 160 ||
      document.documentElement.scrollTop < 160
    ) {
      this.classChange = 'bg-transparent navbar-dark fixed-top';
    }
  }
}
