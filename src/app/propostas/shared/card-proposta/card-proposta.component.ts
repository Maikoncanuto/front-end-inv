import {Component, Input, OnInit} from '@angular/core';
import {ActionCard} from '../models/action-card.interface';
import {ContentCard} from '../models/content-card.interface';


@Component({
  selector: 'isus-card-proposta',
  templateUrl: './card-proposta.component.html',
  styleUrls: ['./card-proposta.component.scss']
})
export class CardPropostaComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle?: string;
  @Input() classCard?: string;

  @Input() actions: ActionCard[];
  @Input() contents: ContentCard[];

  constructor() { }

  ngOnInit() {
  }

}
