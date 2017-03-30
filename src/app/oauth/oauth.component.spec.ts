/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OauthComponent } from './oauth.component';

describe('OauthComponent', () => {
  let component: OauthComponent;
  let fixture: ComponentFixture<OauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
