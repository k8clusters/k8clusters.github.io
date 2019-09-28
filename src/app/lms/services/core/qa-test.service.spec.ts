import { TestBed } from '@angular/core/testing';

import { QaTestService } from './qa-test.service';

describe('QaTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QaTestService = TestBed.get(QaTestService);
    expect(service).toBeTruthy();
  });
});
