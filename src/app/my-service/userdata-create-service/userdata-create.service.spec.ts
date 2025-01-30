import { TestBed } from '@angular/core/testing';

import { UserdataCreateService } from './userdata-create.service';

describe('UserdataCreateService', () => {
  let service: UserdataCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdataCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
