import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PropostaCard} from '../shared/models/proposta-card.interface';


@Component({
  selector: 'isus-propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.scss']
})
export class PropostasComponent implements OnInit {

  searchText: string;

  propostas: PropostaCard[] = [
    {
      title: 'Kevin e Antonio Ferragens Ltda',
      subtitle: 'Empresa de Ferragens',
      contents: [
        {label: 'Responsável: ', value: 'Jhone Raone'},
        {label: 'CNPJ: ', value: '55.849.250/0001-92'},
        {label: 'CNES: ', value: '0001-01'}
      ],
      actions: [
        {label: 'Acompanhar'}
      ]
    },
    {
      title: 'Noah e Cauê Financeira ME',
      subtitle: 'Empresa de economia',
      contents: [
        {label: 'Responsável: ', value: 'Geovana Silva'},
        {label: 'Cnpj: ', value: '79.089.148/0001-02'},
        {label: 'Cnes: ', value: '0002-02'}
      ],
      actions: [
        {label: 'Acompanhar'}
      ]
    },
    {
      title: 'Cast Group',
      subtitle: 'Empresa de tecnologia',
      contents: [
        {label: 'Responsável: ', value: 'Carlos Souza'},
        {label: 'Cnpj: ', value: '0001.121.54.54'},
        {label: 'Cnes: ', value: '0465465'}
      ],
      actions: [
        {label: 'Acompanhar'}
      ]
    },
    {
      title: 'Santa Marta',
      subtitle: 'Empresa de saúde',
      contents: [
        {label: 'Responsável: ', value: 'Kleber Santos'},
        {label: 'Cnpj: ', value: '0001.121.54.54'},
        {label: 'Cnes: ', value: '0465465'}
      ],
      actions: [
        {label: 'Acompanhar'}
      ]
    },
    {
      title: 'CTIS - Tecnologia',
      subtitle: 'Empresa de tecnologia',
      contents: [
        {label: 'Responsável: ', value: 'Bruno Marrone'},
        {label: 'Cnpj: ', value: '0001.121.54.54'},
        {label: 'Cnes: ', value: '0465465'}
      ],
      actions: [
        {label: 'Acompanhar'}
      ]
    },
    {
      title: 'Stefanini IT Solutions',
      subtitle: 'Empresa de tecnologia',
      contents: [
        {label: 'Responsável: ', value: 'Jhone Raone'},
        {label: 'Cnpj: ', value: '0001.121.54.53'},
        {label: 'Cnes: ', value: '12487'}
      ],
      actions: [
        {label: 'Acompanhar'}
      ]
    }

  ];

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  create(): void {
    this._router.navigate(['/propostas/create-proposta']);
  }

}
