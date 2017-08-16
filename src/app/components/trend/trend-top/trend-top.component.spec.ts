import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendTopComponent } from './trend-top.component';

describe('TrendTopComponent', () => {
  let component: TrendTopComponent;
  let fixture: ComponentFixture<TrendTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
