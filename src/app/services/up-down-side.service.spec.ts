import { TestBed } from '@angular/core/testing';

import { UpDownSideService } from './up-down-side.service';

describe('UpDownSideService', () => {
  let service: UpDownSideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpDownSideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
