import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
})
export class CadastroPessoaComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    protected formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.getFormGroup();

  }

  private getFormGroup() {
    const formGroup = this.formBuilder.group({
      name: [{ value: undefined, disabled: false }, Validators.compose([Validators.required, Validators.maxLength(100)])],
      lastName: [{ value: undefined, disabled: false }, Validators.compose([Validators.required, Validators.maxLength(100)])],
      document: [{ value: undefined, disabled: false }, Validators.compose([Validators.required, Validators.maxLength(100)])],
      birthDate: [{ value: undefined, disabled: false }, Validators.maxLength(20)],
      profession: [{ value: undefined, disabled: false },  Validators.maxLength(50)],
      email: [{ value: undefined, disabled: false }, Validators.compose([Validators.required, Validators.maxLength(100)])],
      address: [{ value: undefined, disabled: false }, Validators.maxLength(100)],
      zipCode: [{ value: undefined, disabled: false }, Validators.maxLength(20)]
    });
    return formGroup;
  }

}
