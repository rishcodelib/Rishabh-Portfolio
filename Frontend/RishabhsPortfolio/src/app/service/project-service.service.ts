import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  project: any = [
    {
      key: 1,
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
      projectName: 'Personal Portfolio',
      description: 'Lorem Ipsum Dolor Sit Description.. ',
      liveUrl: 'https://rishabhportfolio-c57dc.web.app/home',
      gitUrl: 'https://github.com/rishcodelib',
      imgSrc: '../assets/images/Portfolio.png',
      tag: ['NodeJS', 'ExpressJS', 'Angular'],
    },
    {
      key: 3,
      projectName: 'Streameo',
      description:
        'A Subscription based Video streaming website, with features of streaming a video into 3 different qualities, subscription plans and stream control',
      liveUrl: null,
      gitUrl: 'https://github.com/cdacgroup16/streameo',
      imgSrc:
        'https://www.rishabh-aggarwal.com/assets/project_logos/streameo.png',
      tag: ['MongoDB', 'ExpressJS', 'Angular', 'NodeJS'],
    },
    {
      key: 4,
      projectName: 'Shree-Trends',
      alias: 'WareHouse Management System',
      description:
        'Ecommerce Application with ability to post/recieve order and handle other Order Request, with integration of Bulk SMS and SMTP Server.',
      liveUrl: 'https://www.shreetrends.in/',
      gitUrl: null,
      imgSrc:
        'https://www.rishabh-aggarwal.com/assets/project_logos/ShreeTrends.png',
      tag: ['HTML', 'CSS3', 'PHP', 'MySQL', 'Jquery', 'Javascript'],
    },
    {
      key: 5,
      projectName: 'The Travel Routes',
      alias: null,
      description: 'A Complete Travel web Application created on wordpress.',
      liveUrl: 'https://www.travelRoutes.in/',
      gitUrl: null,
      imgSrc:
        'https://www.rishabh-aggarwal.com/assets/project_logos/travel_routes.png',
      tag: ['Wordpress'],
    },
    {
      key: 6,
      projectName: 'My Market',
      alias: null,
      description: 'A Complete Web Shopping Application.',
      liveUrl: 'https://www.rishabh-aggarwal.com/wp_projects/mymarket/',
      gitUrl: null,
      imgSrc:
        '../assets/images/MyMarket.png',
      tag: ['Wordpress'],
    },
    {
      key: 6,
      projectName: 'The Rashan Store',
      alias: null,
      description: 'A Multi Utility Online Grocercy Store.',
      liveUrl: 'https://www.rishabh-aggarwal.com/wp_projects/rashÍ›',
      gitUrl: null,
      imgSrc:
        '../assets/images/RashanStore.png',
      tag: ['Wordpress'],
    },
  ];
}
