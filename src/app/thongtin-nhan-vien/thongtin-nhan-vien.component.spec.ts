import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinNhanVienComponent } from './thongtin-nhan-vien.component';

describe('ThongtinNhanVienComponent', () => {
  let component: ThongtinNhanVienComponent;
  let fixture: ComponentFixture<ThongtinNhanVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinNhanVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
