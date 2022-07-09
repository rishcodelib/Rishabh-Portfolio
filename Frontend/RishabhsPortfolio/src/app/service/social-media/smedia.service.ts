import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SmediaService {
  socialMediaLinks: any = [
    {
      github: 'https://github.com/rishcodelib',
      facebook: 'https://www.facbook.com/iam.rishabhhh',
      linkedin: 'https://www.linkedin.com/in/iamrishabhh',
      twitter: 'https://www.twitter.com/im_rishabhh',
      youtube: 'http://www.youtube.com/rishabh23aggarwal',
      instagram: 'https://www.instagram.com/iam.rishabhh/',
      snapchat: 'https://www.snapchat.com/iam.rishabhh',
    }

  ];
  constructor() {}
}
