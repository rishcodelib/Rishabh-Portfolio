import {
  Component,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { environment } from 'src/environments/environment';
environment

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
environment: any;

  constructor(private renderer: Renderer2) {}
  page: string | undefined;
  classChange: any | '';
  ngOnInit(): void {
    this.classChange = 'bg-transparent navbar-dark fixed-top';
    let url = window.location.href;
    // Checking
    // console.log(window.location.pathname);

    this.page = url.split('/')[3];
    console.log(this.page);
   

    switch (this.page) {
      case 'resumes': {
        if (localStorage.getItem('login')) {
          this.classChange = 'bg-light navbar-light ';
        } else {
          window.location.href = 'localhost:4200';
        }
        break;
      }
      case 'users': {
        if (localStorage.getItem('login')) {
          this.classChange = 'bg-light navbar-light ';
        } else {
          window.location.href = '/home';
        }
        break;
      }
      case 'projects': {
        this.classChange = 'bg-light navbar-light ';

        break;
      }
      case 'resume': {
        this.classChange = 'bg-light navbar-light ';

        break;
      }
      case 'project-info': {
        this.classChange = 'bg-light navbar-light ';
        break;
      }
      case 'signin': {
        this.classChange = 'bg-light navbar-light ';
        break;
      }
      case 'disclaimer': {
        this.classChange = 'bg-light navbar-light ';
        break;
      }

      default: {
        this.classChange = 'bg-transparent navbar-dark  fixed-top ';
        break;
      }
    }

    console.log("Prod : " +environment.production);
    console.log("Env : " + environment.BASE_URL);
    // console.log("DEV : " + environment.development.BASE_URL);



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
