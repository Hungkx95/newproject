import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietPhongbanComponent } from './chitiet-phongban.component';

describe('ChitietPhongbanComponent', () => {
  let component: ChitietPhongbanComponent;
  let fixture: ComponentFixture<ChitietPhongbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietPhongbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietPhongbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
