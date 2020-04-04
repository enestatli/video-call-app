import { TestBed } from '@angular/core/testing';

import { OpentokService } from './opentok.service';

describe('OpentokService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpentokService = TestBed.get(OpentokService);
    expect(service).toBeTruthy();
  });
});
