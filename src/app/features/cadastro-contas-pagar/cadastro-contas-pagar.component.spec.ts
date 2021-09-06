import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroContasPagarComponent } from './cadastro-contas-pagar.component';

describe('CadastroContasPagarComponent', () => {
  let component: CadastroContasPagarComponent;
  let fixture: ComponentFixture<CadastroContasPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroContasPagarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroContasPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
