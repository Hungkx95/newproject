import { TestBed } from '@angular/core/testing';

import { PhongBanService } from './phong-ban.service';

describe('PhongBanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhongBanService = TestBed.get(PhongBanService);
    expect(service).toBeTruthy();
  });
});
