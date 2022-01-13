import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  projectDetails = [
    {
      id: 1,
      image: '../assets/img/erp_portal.png',
      alt: 'ERP Portal',
      projectTitle: 'ERP Portal',
      tags: 'MEAN (Mongo,Express,Angular,Node.js) STACK',
      desc: 'A Subscription based Video streaming website, with features of streaming a video into 3 different qualities, subscription plans and stream control .',
      link: {
        git: 'https://github.com/cdacgroup16/streameo',
        demo: '',
        url: '',
      }
    },
    {
      id: 2,
      image: '../assets/img/erp_portal.png',
      alt: 'Warehouse Management System',
      projectTitle: 'Warehouse Management System',
      tags: 'MEAN (Mongo,Express,Angular,Node.js) STACK',
      desc: 'A Subscription based Video streaming website, with features of streaming a video into 3 different qualities, subscription plans and stream control .',
      link: {
        git: 'https://github.com/cdacgroup16/streameo',
        demo: '',
        url: 'https://www.shreetrends.in',
      }
    },
    {
      id: 3,
      image: '../assets/img/erp_portal.png',
      alt: 'Justified Code',
      projectTitle: 'Justified Code',
      tags: 'Company Landing Page',
      desc: 'A Responsive Company Landing Page built using HTML,CSS with PHP(CodeIgnitor) in backend purely.',
      link: {
        git: 'https://github.com/rishcodelib/Justified-Code',
        demo: '',
        url: 'http://www.justifiedcode.in',
      }
    },
    {
      id: 4,
      image: '../assets/img/erp_portal.png',
      alt: 'The Travel Routes',
      projectTitle: 'The Travel Routes',
      tags: 'Wordpress',
      desc: 'A Complete Travel web Application created on wordpress.',
      link: {
        git: '',
        demo: '',
        url: 'http://www.thetravelroutes.com',
      }
    },

    {
      id: 5,
      image: '../assets/project_logos/RashanStore.png',
      alt: 'The Rashan Store',
      projectTitle: 'The Rashan Store',
      tags: 'Wordpress',
      desc: 'A Rashan Store web Application created on wordpress.',
      link: {
        git: '',
        demo: 'http://www.rishabh-aggarwal.com/wp_projects/rashanstore/',
        url: '',
      }
    },
    {
      id: 6,
      image: '../assets/project_logos/RashanStore.png',
      alt: 'The Market Store',
      projectTitle: 'The Market Store',
      tags: 'Wordpress',
      desc: 'A Complete Online Ecommerce Website created on wordpress.',
      link: {
        git: '',
        demo: 'http://www.rishabh-aggarwal.com/wp_projects/mymarket/',
        url: '',
      }
    }
  ];
}
