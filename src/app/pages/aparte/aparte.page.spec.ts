import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartePage } from './aparte.page';

describe('ApartePage', () => {
  let component: ApartePage;
  let fixture: ComponentFixture<ApartePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
