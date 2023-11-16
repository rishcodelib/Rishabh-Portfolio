import { TestBed } from '@angular/core/testing';

import { GetFromUrlService } from './get-from-url.service';

describe('GetFromUrlService', () => {
  let service: GetFromUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFromUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
