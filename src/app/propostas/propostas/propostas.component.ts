import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PropostaCard} from '../shared/models/proposta-card.interface';


@Component({
  selector: 'isus-propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.scss']
})
export class PropostasComponent implements OnInit {

  propostas: PropostaCard[] = [
    {
      title: 'Kevin e Antonio Ferragens Ltda',
      subtitle: 'Empresa de tecnologia',
      contents: [
        {label: 'CNPJ: ', value: '55.849.250/0001-92'},
        {label: 'CNES: ', value: '0001-01'},
        {label: 'Responsável: ', value: 'Jhone Raone'}
      ],
      actions: [
        {label: 'Opções'}
      ]
    },
    {
      title: 'Noah e Cauê Financeira ME',
      subtitle: 'Empresa de tecnologia',
      contents: [
        {label: 'CNPJ: ', value: '79.089.148/0001-02'},
        {label: 'CNES: ', value: '0002-02'},
        {label: 'Responsável: ', value: 'Jhone Raone'}
      ],
      actions: [
        {label: 'Acompanhar'}
      ]
    },
    {
      title: 'Cast Group',
      subtitle: 'Empresa de tecnologia',
      contents: [
        {label: 'CNPJ: ', value: '0001.121.54.54'},
        {label: 'CNES: ', value: '0465465'},
        {label: 'Responsável: ', value: 'Jhone Raone'}
      ],
      actions: [
        {label: 'Acompanhar'}
      ]
    },
    {
      title: 'Cast Group',
      subtitle: 'Empresa de tecnologia',
      contents: [
        {label: 'CNPJ: ', value: '0001.121.54.54'},
        {label: 'CNES: ', value: '0465465'},
        {label: 'Responsável: ', value: 'Jhone Raone'}
      ],
      actions: [
        {label: 'Acompanhar'}
      ]
    },
    {
      title: 'Cast Group',
      subtitle: 'Empresa de tecnologia',
      contents: [
        {label: 'CNPJ: ', value: '0001.121.54.54'},
        {label: 'CNES: ', value: '0465465'},
        {label: 'Responsável: ', value: 'Jhone Raone'}
      ],
      actions: [
        {label: 'Acompanhar'}
      ]
    },
    {
      title: 'Cast Group',
      subtitle: 'Empresa de tecnologia',
      contents: [
        {label: 'CNPJ: ', value: '0001.121.54.54'},
        {label: 'CNES: ', value: '0465465'},
        {label: 'Responsável: ', value: 'Jhone Raone'}
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
