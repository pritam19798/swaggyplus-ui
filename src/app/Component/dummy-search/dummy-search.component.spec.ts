import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummySearchComponent } from './dummy-search.component';

describe('DummySearchComponent', () => {
  let component: DummySearchComponent;
  let fixture: ComponentFixture<DummySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
