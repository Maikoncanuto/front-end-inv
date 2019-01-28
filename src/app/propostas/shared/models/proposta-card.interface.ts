import {ActionCard} from './action-card.interface';
import {ContentCard} from './content-card.interface';

export interface PropostaCard {
  title: string;
  subtitle?: string;
  contents?: ContentCard[];
  actions?: ActionCard[];
}
