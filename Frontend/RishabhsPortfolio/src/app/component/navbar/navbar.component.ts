import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  classChange = '';
  page: string | undefined;
  ngOnInit(): void {
    this.classChange = 'bg-transparent navbar-dark fixed-top';
    let url = window.location.href;
    console.log(url);
    this.page = url.split('/')[3];
    console.log(this.page);
    if (this.page === 'resume') {
      this.classChange = 'bg-light navbar-light ';
    }
  }
  navItem = document.getElementsByClassName('navbar');

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.page === 'resume') {
      this.classChange = 'bg-light navbar-light  fixed-top ';
    } else {
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
}
