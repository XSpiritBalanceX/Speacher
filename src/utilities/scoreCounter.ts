import { ICard, Suit } from "../types/GameTypes";

export const scoreCounter = (cardsName: ICard[]) => {
  const club = cardsName
    .filter((el) => {
      return el.suit === Suit.CLUB;
    })
    .reduce((acc, el) => acc + Number(el.name), 0);
  const diamond = cardsName
    .filter((el) => {
      return el.suit === Suit.DIAMOND;
    })
    .reduce((acc, el) => acc + Number(el.name), 0);
  const spades = cardsName
    .filter((el) => {
      return el.suit === Suit.SPADES;
    })
    .reduce((acc, el) => acc + Number(el.name), 0);
  const heart = cardsName
    .filter((el) => {
      return el.suit === Suit.HEART;
    })
    .reduce((acc, el) => acc + Number(el.name), 0);

  return Math.max(club, diamond, spades, heart);
};
