import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'isus-create-proposta',
  templateUrl: './create-proposta.component.html',
  styleUrls: ['./create-proposta.component.scss']
})
export class CreatePropostaComponent implements OnInit {

  buscaRealizada: Boolean = false;

  objetos: any = [
    {nome: 'Obra', tipo: 'o'},
    {nome: 'Equipamento', tipo: 'e'},
    {nome: 'Capacitação', tipo: 'c'}
  ];

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  pesquisar(): void {
    this.buscaRealizada = !this.buscaRealizada;
  }

  cadastro(termo: string): void {
    if (termo === 'o') {
      this._router.navigate(['/propostas/create-proposta-obra']);
    }

    if (termo === 'e') {
      this._router.navigate(['/propostas/create-proposta-equipamento']);
    }

    if (termo === 'c') {
      this._router.navigate(['/propostas/create-proposta-capacitacao']);
    }
  }
}
