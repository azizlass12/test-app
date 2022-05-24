import { TestBed } from '@angular/core/testing';

import { GurdadminGuard } from './gurdadmin.guard';

describe('GurdadminGuard', () => {
  let guard: GurdadminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GurdadminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
