import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipomanejoPage } from './tipomanejo.page';

describe('TipomanejoPage', () => {
  let component: TipomanejoPage;
  let fixture: ComponentFixture<TipomanejoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipomanejoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipomanejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
