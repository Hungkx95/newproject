import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThayDoiChucVuComponent } from './thay-doi-chuc-vu.component';

describe('ThayDoiChucVuComponent', () => {
  let component: ThayDoiChucVuComponent;
  let fixture: ComponentFixture<ThayDoiChucVuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThayDoiChucVuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThayDoiChucVuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
