import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaProfessionalService {
  profSm: any = [
    {
      github: 'https://github.com/rishcodelib',
      
      linkedin: 'https://www.linkedin.com/in/iamrishabhh',
     
      twitter: 'https://www.twitter.com/im_rishabhh',
      
      whatsapp: 'www.whatsapp.com'
    }
  ]
  constructor() { }
}
