import { TestBed } from '@angular/core/testing';

import { QaTestSampleGenService } from './qa-test-sample-gen.service';

describe('QaTestSampleGenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QaTestSampleGenService = TestBed.get(QaTestSampleGenService);
    expect(service).toBeTruthy();
  });
});
