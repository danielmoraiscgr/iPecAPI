import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalizacaoPage } from './totalizacao.page';

describe('TotalizacaoPage', () => {
  let component: TotalizacaoPage;
  let fixture: ComponentFixture<TotalizacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalizacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
