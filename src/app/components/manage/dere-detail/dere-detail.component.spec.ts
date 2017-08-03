import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DereDetailComponent } from './dere-detail.component';

describe('DereDetailComponent', () => {
  let component: DereDetailComponent;
  let fixture: ComponentFixture<DereDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DereDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DereDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
