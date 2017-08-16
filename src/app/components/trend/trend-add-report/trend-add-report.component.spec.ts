import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendAddReportComponent } from './trend-add-report.component';

describe('TrendAddReportComponent', () => {
  let component: TrendAddReportComponent;
  let fixture: ComponentFixture<TrendAddReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendAddReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendAddReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
