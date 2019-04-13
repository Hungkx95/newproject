import { TestBed } from '@angular/core/testing';

import { NhanVienServicesService } from './nhan-vien-services.service';

describe('NhanVienServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NhanVienServicesService = TestBed.get(NhanVienServicesService);
    expect(service).toBeTruthy();
  });
});
