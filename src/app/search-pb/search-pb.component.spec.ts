import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPBComponent } from './search-pb.component';

describe('SearchPBComponent', () => {
  let component: SearchPBComponent;
  let fixture: ComponentFixture<SearchPBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
