import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitAutocompleteComponent } from './unit-autocomplete.component';

describe('UnitAutocompleteComponent', () => {
  let component: UnitAutocompleteComponent;
  let fixture: ComponentFixture<UnitAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
