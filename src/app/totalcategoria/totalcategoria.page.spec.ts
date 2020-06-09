import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcategoriaPage } from './totalcategoria.page';

describe('TotalcategoriaPage', () => {
  let component: TotalcategoriaPage;
  let fixture: ComponentFixture<TotalcategoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalcategoriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalcategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
