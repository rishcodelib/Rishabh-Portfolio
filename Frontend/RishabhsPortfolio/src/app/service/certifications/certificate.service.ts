import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  certiCredentials: any = [
    {
      issuedBy: ' Udemy ',
      certiDate: 'Abcd',
      certiValid: 'null',
      certiPhoto: '/src/abcdef.png',
      certiLink: 'https://www.linkedin.com',
      certiCerd: 'Alpha',
      certiTag: ['JAVA'],
    },
    {
      issuedBy: 'Abcd',
      certiDate: 'Abcd',
      certiValid: null,
      certiPhoto: '/src/abcdef.png',
      certiLink: 'https://www.rishabh-aggarwal.com',
      certiCerd: 'Alpha',
      certiTag: ['JAVA'],
    },
  ];

  constructor() {}
}
