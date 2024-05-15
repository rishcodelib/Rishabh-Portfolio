import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SmediaService {
  socialMediaLinks: any = [
    {
      facebook: 'https://www.facebook.com/iam.rishabhhh',
      youtube: 'http://www.youtube.com/@RishhiiiMusic',
      instagram: 'https://www.instagram.com/iam.rishhiii/',
      snapchat: 'https://www.snapchat.com/iam.rishhiii',
    },
  ];
  constructor() {}
}
