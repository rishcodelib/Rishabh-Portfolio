import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AllProjectsService {
  uri = environment.backendApi + '/project';

  project: any = [
    {
      key: 1,
      id: '6314b2586be526894adcaa50',
      projectName: 'Ecommerce-App',
      description:
        'A Complete E-Commerce solution for customers, vendors & distrubuters.',
      liveUrl: 'https://ecommerceapp-14994.web.app/',
      gitUrl: 'https://github.com/rishcodelib/Ecommerce-App-JAVA',
      imgSrc: '../assets/images/no_image.png',
      tag: ['JAVA', 'Spring Boot', 'Angular'],
    },
    {
      key: 2,
      id: '6314b3a06b629c689bf74a1f',
      projectName: 'Personal Portfolio',
      description: 'Personal portfolio website created to showcase projects and details about myself. ',
      liveUrl: 'https://rishabh-aggarwal.com',
      gitUrl: 'https://github.com/rishcodelib',
      demoUrl: 'https://rishabhaggarwal-bae83.web.app/home',
      imgSrc: '../assets/images/Portfolio.png',
      tag: ['NodeJS', 'ExpressJS', 'Angular'],
    },
    {
      key: 3,
      id: '6314b4686b629c689bf74a27',
      projectName: 'Streameo',
      description:
        'A Subscription based Video streaming website, with features of streaming a video into 3 different qualities, subscription plans and stream control',
      liveUrl: null,
      gitUrl: 'https://github.com/cdacgroup16/streameo',
      demoUrl: null,
      imgSrc: '../assets/images/no_image.png',
      tag: ['MongoDB', 'ExpressJS', 'Angular', 'NodeJS'],
    },
    {
      key: 4,
      id: '6314b56a6b629c689bf74a234',
      projectName: 'Shree-Trends',
      alias: 'WareHouse Management System',
      description:
        'Ecommerce Application with ability to post/recieve order and handle other Order Request, with integration of Bulk SMS and SMTP Server.',
      liveUrl: 'https://www.shreetrends.in/',
      gitUrl: null,
      demoUrl: null,
      imgSrc: '../assets/images/no_image.png',
      tag: ['HTML', 'CSS3', 'PHP', 'MySQL', 'Jquery', 'Javascript'],
    },
    {
      key: 5,
      id: '6314b56a6b629c689bf74a2d',
      projectName: 'The Travel Routes',
      alias: null,
      description: 'A Complete Travel web Application created on wordpress.',
      liveUrl: 'https://www.travelRoutes.in/',
      gitUrl: null,
      demoUrl: null,
      imgSrc: '../assets/images/no_image.png',
      tag: ['Wordpress', 'Elementor by WP'],
    },
    {
      key: 6,
      id: '6314b7427be0bda93598bd123',
      projectName: 'My Market',
      alias: null,
      description: 'A Complete Web Shopping Application.',
      liveUrl: 'https://www.rishabh-aggarwal.com/wp_projects/mymarket/',
      gitUrl: null,
      imgSrc: '../assets/images/MyMarket.png',
      demoUrl: null,
      tag: ['Wordpress', 'Elementor by WP', 'Bootstrap'],
    },
    {
      key: 6,

      id: '6314b7427be0bda93598bdf8',
      projectName: 'The Rashan Store',
      alias: null,
      description: 'A Multi Utility Online Grocercy Store.',
      liveUrl: 'https://www.rishabh-aggarwal.com/wp_projects/rashÍ›',
      gitUrl: null,
      demoUrl: null,
      imgSrc: '../assets/images/RashanStore.png',
      tag: ['Wordpress', 'Elementor by WP', 'Bootstrap'],
    },
    {
      key: 6,
      id: '6314b7427be0bda93598bdf8',
      projectName: 'Justified Code',
      alias: null,
      description: 'A landing page for company, bussinesses . . . ',
      liveUrl: 'https://justified-code-f9ec1.firebaseapp.com/',
      gitUrl: null,
      demoUrl: null,
      imgSrc: '../assets/images/no_image.png',
      tag: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
    },
  ];
  payload: string | undefined;
  constructor(private http: HttpClient) {}

  getAllProjects() {
    return this.http.get(this.uri);
  }
  getProject(key: any) {
    this.payload = this.uri + '/' + key;
    console.log(this.payload);
    return this.http.get(this.payload);
  }

  createProject(pjt: any) {
    return this.http.post(this.uri, pjt);
  }
  deleteProject(id: any) {
    console.log(`Project Service hit with ${this.uri}/${id} `);

    return this.http.delete(this.uri, id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(`error by service is ${err}`);
        console.log(err);
      }
    );
  }
}
