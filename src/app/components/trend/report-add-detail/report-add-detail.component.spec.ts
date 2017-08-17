import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAddDetailComponent } from './report-add-detail.component';

describe('ReportAddDetailComponent', () => {
  let component: ReportAddDetailComponent;
  let fixture: ComponentFixture<ReportAddDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAddDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAddDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
