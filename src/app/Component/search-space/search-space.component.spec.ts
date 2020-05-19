import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSpaceComponent } from './search-space.component';

describe('SearchSpaceComponent', () => {
  let component: SearchSpaceComponent;
  let fixture: ComponentFixture<SearchSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
