import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroContasReceberComponent } from './cadastro-contas-receber.component';

describe('CadastroContasReceberComponent', () => {
  let component: CadastroContasReceberComponent;
  let fixture: ComponentFixture<CadastroContasReceberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroContasReceberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroContasReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
