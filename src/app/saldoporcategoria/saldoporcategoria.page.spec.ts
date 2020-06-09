import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoporcategoriaPage } from './saldoporcategoria.page';

describe('SaldoporcategoriaPage', () => {
  let component: SaldoporcategoriaPage;
  let fixture: ComponentFixture<SaldoporcategoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaldoporcategoriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoporcategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
