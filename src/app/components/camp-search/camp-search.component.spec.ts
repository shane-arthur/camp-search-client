import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampSearchComponent } from './camp-search.component';

describe('CampSearchComponent', () => {
  let component: CampSearchComponent;
  let fixture: ComponentFixture<CampSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
