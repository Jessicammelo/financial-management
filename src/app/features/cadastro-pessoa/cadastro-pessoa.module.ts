import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

const routes: Routes = [
  {
    path: '',
    component: CadastroPessoaComponent
  }
];

@NgModule({
  declarations: [CadastroPessoaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CalendarModule
  ]
})
export class CadastroPessoaModule { }
