import { TestBed } from '@angular/core/testing';

import { FbGaurdGuard } from './fb-gaurd.guard';

describe('FbGaurdGuard', () => {
  let guard: FbGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FbGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
