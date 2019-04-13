import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemNhanVienComponent } from './them-nhan-vien.component';

describe('ThemNhanVienComponent', () => {
  let component: ThemNhanVienComponent;
  let fixture: ComponentFixture<ThemNhanVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemNhanVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
