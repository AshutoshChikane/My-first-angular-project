import { TestBed } from '@angular/core/testing';

import { CsvHandleServiceService } from './csv-handle-service.service';

describe('CsvHandleServiceService', () => {
  let service: CsvHandleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvHandleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
