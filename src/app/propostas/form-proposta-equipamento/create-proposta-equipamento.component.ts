import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'isus-create-proposta-equipamento',
  templateUrl: './create-proposta-equipamento.component.html',
  styleUrls: ['./create-proposta-equipamento.component.scss']
})
export class CreatePropostaEquipamentoComponent implements OnInit {

  metas: any = [
    {viewValue: 'Meta de qualificação'},
    {viewValue: 'Meta de obra'},
    {viewValue: 'Meta de capacitação'},
    {viewValue: 'Meta de ordem'},
    {viewValue: 'Meta de equipamentos'}
  ];

  etapas: any = [
    {viewValue: 'Etapa de qualificação'},
    {viewValue: 'Etapa de obra'},
    {viewValue: 'Etapa de equipamentos'},
    {viewValue: 'Etapa de obra futura'}
  ];

  responsaveis: any = [
    {viewValue: 'Roberto Henrique'},
    {viewValue: 'Carlos Almeida'},
    {viewValue: 'Luiza Carvalho'},
    {viewValue: 'Jhonas Santos'}
  ];

  meses: any = [
    {viewValue: 'Janeiro'},
    {viewValue: 'Fevereiro'},
    {viewValue: 'Março'},
    {viewValue: 'Abril'}
  ];

  anos: any = [
    {viewValue: '2019'},
    {viewValue: '2018'},
    {viewValue: '2017'},
    {viewValue: '2016'}
  ];

  arquivos: any = [
    {viewValue: 'PDF'},
    {viewValue: 'DOC'},
    {viewValue: 'JPG'},
  ];

  constructor(private _route: Router) {
  }

  ngOnInit() {
  }

  cadastrar(): void {
    this._route.navigate(['/propostas/']);
  }
}
