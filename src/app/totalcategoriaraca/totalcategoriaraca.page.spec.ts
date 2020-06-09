import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcategoriaracaPage } from './totalcategoriaraca.page';

describe('TotalcategoriaracaPage', () => {
  let component: TotalcategoriaracaPage;
  let fixture: ComponentFixture<TotalcategoriaracaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalcategoriaracaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalcategoriaracaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
