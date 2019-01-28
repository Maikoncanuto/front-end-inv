import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropostasComponent} from './propostas/propostas.component';
import {CreatePropostaComponent} from './form-proposta/create-proposta.component';
import {RouterModule} from '@angular/router';
import {PROPOSTAS_ROUTE} from './propostas.routing';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCommonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSelectModule,
  MatStepperModule
} from '@angular/material';
import {CreatePropostaObraComponent} from './form-proposta-obra/create-proposta-obra.component';
import {CreatePropostaEquipamentoComponent} from './form-proposta-equipamento/create-proposta-equipamento.component';
import {CreatePropostaCapacitacaoComponent} from './form-proposta-capacitacao/create-proposta-capacitacao.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardPropostaComponent} from './shared/card-proposta/card-proposta.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    PropostasComponent,
    CreatePropostaComponent,
    CreatePropostaObraComponent,
    CreatePropostaEquipamentoComponent,
    CreatePropostaCapacitacaoComponent,
    CardPropostaComponent
  ],
  exports: [
    CardPropostaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatCommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    SharedModule,
    RouterModule.forChild(PROPOSTAS_ROUTE)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PropostasModule {
}
