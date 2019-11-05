import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorPage } from './produtor.page';

describe('ProdutorPage', () => {
  let component: ProdutorPage;
  let fixture: ComponentFixture<ProdutorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
