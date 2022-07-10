import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SmediaService {
  socialMediaLinks: any = [
    {
      facebook: 'https://www.facbook.com/iam.rishabhhh',
      youtube: 'http://www.youtube.com/rishabh23aggarwal',
      instagram: 'https://www.instagram.com/iam.rishabhh/',
      snapchat: 'https://www.snapchat.com/iam.rishabhh',
    },
  ];
  constructor() {}
}
