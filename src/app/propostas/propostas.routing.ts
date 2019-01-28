import {Routes} from '@angular/router';
import {PropostasComponent} from './propostas/propostas.component';
import {CreatePropostaComponent} from './form-proposta/create-proposta.component';
import {CreatePropostaObraComponent} from './form-proposta-obra/create-proposta-obra.component';
import {CreatePropostaEquipamentoComponent} from './form-proposta-equipamento/create-proposta-equipamento.component';
import {CreatePropostaCapacitacaoComponent} from './form-proposta-capacitacao/create-proposta-capacitacao.component';

export const PROPOSTAS_ROUTE: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: PropostasComponent
    }]
  },
  {
    path: '',
    children: [{
      path: 'create-proposta',
      component: CreatePropostaComponent
    }]
  },
  {
    path: '',
    children: [{
      path: 'create-proposta-obra',
      component: CreatePropostaObraComponent
    }]
  },
  {
    path: '',
    children: [{
      path: 'create-proposta-equipamento',
      component: CreatePropostaEquipamentoComponent
    }]
  },
  {
    path: '',
    children: [{
      path: 'create-proposta-capacitacao',
      component: CreatePropostaCapacitacaoComponent
    }]
  }
];
