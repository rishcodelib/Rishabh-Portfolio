import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  page: string | undefined;
  classChange: any | '';
  ngOnInit(): void {
    this.classChange = 'bg-transparent navbar-dark fixed-top';
    let url = window.location.href;
    this.page = url.split('/')[3];

    // To Remove Nav Effects on Specific page
    // if (this.page === 'resume') {
    //   this.classChange = 'bg-light navbar-light ';
    // } else if (this.page === 'users') {
    //   this.classChange = 'bg-light navbar-light ';
    // }

    switch (this.page) {
      case 'resume': {
        this.classChange = 'bg-light navbar-light ';
        break;
      }
      case 'users': {
        this.classChange = 'bg-light navbar-light ';
        break;
      }
      case 'projects': {
        this.classChange = 'bg-light navbar-light ';
        break;
      }
      default: {
        this.classChange = 'bg-transparent navbar-dark  fixed-top ';
        break;
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // if (this.page === 'home') {
    //   this.classChange = 'bg-light navbar-light  fixed-top ';
    // }
    if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 70
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
