/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DereListComponent } from './dere-list.component';

describe('DereListComponent', () => {
  let component: DereListComponent;
  let fixture: ComponentFixture<DereListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DereListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
