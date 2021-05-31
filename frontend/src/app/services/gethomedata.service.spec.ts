import { TestBed } from '@angular/core/testing';

import { GethomedataService } from './gethomedata.service';

describe('GethomedataService', () => {
  let service: GethomedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GethomedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
