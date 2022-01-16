import { TestBed } from '@angular/core/testing';

import { ExcelExpService } from './excel-exp.service';

describe('ExcelExpService', () => {
  let service: ExcelExpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelExpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
