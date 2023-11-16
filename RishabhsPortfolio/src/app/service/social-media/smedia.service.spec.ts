import { TestBed } from '@angular/core/testing';

import { SmediaService } from './smedia.service';

describe('SmediaService', () => {
  let service: SmediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
