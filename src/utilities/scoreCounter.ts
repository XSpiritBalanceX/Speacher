import { ICard, Suit, Card } from "../types/GameTypes";

const calculateScoreByMatchCardNumber = (
  cards: ICard[],
  expectedCard: Card,
  scoreByMatch: number
) => {
  const filteredCards = cards.filter((el) => {
    return el.name === expectedCard;
  });
  if (filteredCards.length >= 3) {
    return scoreByMatch;
  } else {
    return 0;
  }
};

const cardsCounter = (cardsName: ICard[]) => {
  const sixCards = calculateScoreByMatchCardNumber(cardsName, Card.CARD_6, 18);
  const sevenCards = calculateScoreByMatchCardNumber(
    cardsName,
    Card.CARD_7,
    21
  );
  const eightCards = calculateScoreByMatchCardNumber(
    cardsName,
    Card.CARD_8,
    24
  );
  const nieCards = calculateScoreByMatchCardNumber(cardsName, Card.CARD_9, 27);
  const tenCards = calculateScoreByMatchCardNumber(cardsName, Card.CARD_10, 30);
  const jackCards = calculateScoreByMatchCardNumber(cardsName, Card.CARD_J, 30);
  const queenCards = calculateScoreByMatchCardNumber(
    cardsName,
    Card.CARD_Q,
    30
  );
  const kingCards = calculateScoreByMatchCardNumber(cardsName, Card.CARD_K, 30);
  let aceCards: ICard[] | number = cardsName.filter((el) => {
    return el.name === Card.CARD_A;
  });
  if (aceCards.length >= 2) {
    aceCards = 22;
  } else {
    aceCards = 0;
  }

  return Math.max(
    sixCards,
    sevenCards,
    eightCards,
    nieCards,
    tenCards,
    jackCards,
    queenCards,
    kingCards,
    aceCards
  );
};

const suitsCounter = (cardsName: ICard[]) => {
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

export const scoreCounter = (cardsName: ICard[]) => {
  const cards = cardsCounter(cardsName);
  const suits = suitsCounter(cardsName);

  return Math.max(cards, suits);
};
