import { TestBed } from '@angular/core/testing';

import { SocialMediaProfessionalService } from './social-media-professional.service';

describe('SocialMediaProfessionalService', () => {
  let service: SocialMediaProfessionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialMediaProfessionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
