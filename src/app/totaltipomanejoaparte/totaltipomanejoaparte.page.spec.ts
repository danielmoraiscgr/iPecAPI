import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaltipomanejoapartePage } from './totaltipomanejoaparte.page';

describe('TotaltipomanejoapartePage', () => {
  let component: TotaltipomanejoapartePage;
  let fixture: ComponentFixture<TotaltipomanejoapartePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotaltipomanejoapartePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaltipomanejoapartePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
