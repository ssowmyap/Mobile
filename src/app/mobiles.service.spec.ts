import { TestBed } from '@angular/core/testing';

import { MobilesService } from './mobiles.service';

describe('MobilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobilesService = TestBed.get(MobilesService);
    expect(service).toBeTruthy();
  });
});
