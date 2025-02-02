import { TestBed } from '@angular/core/testing';

import { DateRecordServiceService } from './date-record-service.service';

describe('DateRecordServiceService', () => {
  let service: DateRecordServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateRecordServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
