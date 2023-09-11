export enum Card {
  CARD_6 = 6,
  CARD_7 = 7,
  CARD_8 = 8,
  CARD_9 = 9,
  CARD_10 = 10,
  CARD_J = 10,
  CARD_Q = 10,
  CARD_K = 10,
  CARD_A = 11,
}

export enum Suit {
  CLUB,
  DIAMOND,
  SPADES,
  HEART,
}

export interface ICard {
  name: Card;
  suit: Suit;
}

export interface IPlayers {
  player: number;
  cardImage: string[];
  card: ICard[];
}

export interface IBoardProps {
  players: {
    player: number;
    cardImage: string[];
    card: ICard[];
  }[];
  cards: number;
}
