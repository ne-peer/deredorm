import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DereAutocompleteComponent } from './dere-autocomplete.component';

describe('DereAutocompleteComponent', () => {
  let component: DereAutocompleteComponent;
  let fixture: ComponentFixture<DereAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DereAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DereAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
