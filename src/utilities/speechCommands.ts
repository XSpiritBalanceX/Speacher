import { Card, Suit } from "../types/GameTypes";

export const speechCommands = (
  cbFunc: (image: string, card: { name: Card; suit: Suit }) => void
) => {
  const commands = [
    {
      command: ["Туз треф", "Туз крести"],
      callback: () =>
        cbFunc(require("../images/aceofclubs.jpg"), {
          name: Card.CARD_A,
          suit: Suit.CLUB,
        }),
    },
    {
      command: ["Туз бубен", "Туз буби", "Туз бубны"],
      callback: () =>
        cbFunc(require("../images/aceofdiamonds.jpg"), {
          name: Card.CARD_A,
          suit: Suit.DIAMOND,
        }),
    },
    {
      command: ["Туз червей", "Туз червы", "Туз черви"],
      callback: () =>
        cbFunc(require("../images/aceofhearts.jpg"), {
          name: Card.CARD_A,
          suit: Suit.HEART,
        }),
    },
    {
      command: ["Туз пик", "Туз пики"],
      callback: () =>
        cbFunc(require("../images/aceofspades.jpg"), {
          name: Card.CARD_A,
          suit: Suit.SPADES,
        }),
    },
    {
      command: "Король треф",
      callback: () =>
        cbFunc(require("../images/kingofclubs.jpg"), {
          name: Card.CARD_K,
          suit: Suit.CLUB,
        }),
    },
    {
      command: "Король бубен",
      callback: () =>
        cbFunc(require("../images/kingofdiamonds.jpg"), {
          name: Card.CARD_K,
          suit: Suit.DIAMOND,
        }),
    },
    {
      command: "Король червей",
      callback: () =>
        cbFunc(require("../images/kingofhearts.jpg"), {
          name: Card.CARD_K,
          suit: Suit.HEART,
        }),
    },
    {
      command: "Король пик",
      callback: () =>
        cbFunc(require("../images/kingofspades.jpg"), {
          name: Card.CARD_K,
          suit: Suit.SPADES,
        }),
    },

    {
      command: "Дама треф",
      callback: () =>
        cbFunc(require("../images/queenofclubs.jpg"), {
          name: Card.CARD_Q,
          suit: Suit.CLUB,
        }),
    },
    {
      command: "Дама бубен",
      callback: () =>
        cbFunc(require("../images/queenofdiamonds.jpg"), {
          name: Card.CARD_Q,
          suit: Suit.DIAMOND,
        }),
    },
    {
      command: "Дама червей",
      callback: () =>
        cbFunc(require("../images/queenofhearts.jpg"), {
          name: Card.CARD_Q,
          suit: Suit.HEART,
        }),
    },
    {
      command: "Дама пик",
      callback: () =>
        cbFunc(require("../images/queenofspades.jpg"), {
          name: Card.CARD_Q,
          suit: Suit.SPADES,
        }),
    },

    {
      command: "Валет треф",
      callback: () =>
        cbFunc(require("../images/jackofclubs.jpg"), {
          name: Card.CARD_J,
          suit: Suit.CLUB,
        }),
    },
    {
      command: "Валет бубен",
      callback: () =>
        cbFunc(require("../images/jackofdiamonds.jpg"), {
          name: Card.CARD_J,
          suit: Suit.DIAMOND,
        }),
    },
    {
      command: "Валет червей",
      callback: () =>
        cbFunc(require("../images/jackofhearts.jpg"), {
          name: Card.CARD_J,
          suit: Suit.HEART,
        }),
    },
    {
      command: "Валет пик",
      callback: () =>
        cbFunc(require("../images/jackofspades.jpg"), {
          name: Card.CARD_J,
          suit: Suit.SPADES,
        }),
    },

    {
      command: "Десятка треф",
      callback: () =>
        cbFunc(require("../images/tenofclubs.jpg"), {
          name: Card.CARD_10,
          suit: Suit.CLUB,
        }),
    },
    {
      command: "Десятка бубен",
      callback: () =>
        cbFunc(require("../images/tenofdiamonds.jpg"), {
          name: Card.CARD_10,
          suit: Suit.DIAMOND,
        }),
    },
    {
      command: "Десятка червей",
      callback: () =>
        cbFunc(require("../images/tenofhearts.jpg"), {
          name: Card.CARD_10,
          suit: Suit.HEART,
        }),
    },
    {
      command: "Десятка пик",
      callback: () =>
        cbFunc(require("../images/tenofspades.jpg"), {
          name: Card.CARD_10,
          suit: Suit.SPADES,
        }),
    },

    {
      command: "Девятка треф",
      callback: () =>
        cbFunc(require("../images/nineofclubs.jpg"), {
          name: Card.CARD_9,
          suit: Suit.CLUB,
        }),
    },
    {
      command: "Девятка бубен",
      callback: () =>
        cbFunc(require("../images/nineofdiamonds.jpg"), {
          name: Card.CARD_9,
          suit: Suit.DIAMOND,
        }),
    },
    {
      command: "Девятка червей",
      callback: () =>
        cbFunc(require("../images/nineofhearts.jpg"), {
          name: Card.CARD_9,
          suit: Suit.HEART,
        }),
    },
    {
      command: "Девятка пик",
      callback: () =>
        cbFunc(require("../images/nineofspades.jpg"), {
          name: Card.CARD_9,
          suit: Suit.SPADES,
        }),
    },

    {
      command: "Восьмёрка треф",
      callback: () =>
        cbFunc(require("../images/eightofclubs.jpg"), {
          name: Card.CARD_8,
          suit: Suit.CLUB,
        }),
    },
    {
      command: "Восьмёрка бубен",
      callback: () =>
        cbFunc(require("../images/eightofdiamonds.jpg"), {
          name: Card.CARD_8,
          suit: Suit.DIAMOND,
        }),
    },
    {
      command: "Восьмёрка червей",
      callback: () =>
        cbFunc(require("../images/eightofhearts.jpg"), {
          name: Card.CARD_8,
          suit: Suit.HEART,
        }),
    },
    {
      command: "Восьмёрка пик",
      callback: () =>
        cbFunc(require("../images/eightofspades.jpg"), {
          name: Card.CARD_8,
          suit: Suit.SPADES,
        }),
    },

    {
      command: "Семёрка треф",
      callback: () =>
        cbFunc(require("../images/sevenofclubs.jpg"), {
          name: Card.CARD_7,
          suit: Suit.CLUB,
        }),
    },
    {
      command: "Семёрка бубен",
      callback: () =>
        cbFunc(require("../images/sevenofdiamonds.jpg"), {
          name: Card.CARD_7,
          suit: Suit.DIAMOND,
        }),
    },
    {
      command: "Семёрка червей",
      callback: () =>
        cbFunc(require("../images/sevenofhearts.jpg"), {
          name: Card.CARD_7,
          suit: Suit.HEART,
        }),
    },
    {
      command: "Семёрка пик",
      callback: () =>
        cbFunc(require("../images/sevenofspades.jpg"), {
          name: Card.CARD_7,
          suit: Suit.SPADES,
        }),
    },

    {
      command: "Шестёрка треф",
      callback: () =>
        cbFunc(require("../images/sixofclubs.jpg"), {
          name: Card.CARD_6,
          suit: Suit.CLUB,
        }),
    },
    {
      command: "Шестёрка бубен",
      callback: () =>
        cbFunc(require("../images/sixofdiamonds.jpg"), {
          name: Card.CARD_6,
          suit: Suit.DIAMOND,
        }),
    },
    {
      command: "Шестёрка червей",
      callback: () =>
        cbFunc(require("../images/sixofhearts.jpg"), {
          name: Card.CARD_6,
          suit: Suit.HEART,
        }),
    },
    {
      command: "Шестёрка пик",
      callback: () =>
        cbFunc(require("../images/sixofspades.jpg"), {
          name: Card.CARD_6,
          suit: Suit.SPADES,
        }),
    },

    /*  {
      command: "Пятерка треф",
      callback: () => cbFunc(require("../images/fiveofclubs.jpg")),
    },
    {
      command: "Пятерка бубен",
      callback: () => cbFunc(require("../images/fiveofdiamonds.jpg")),
    },
    {
      command: "Пятерка червей",
      callback: () => cbFunc(require("../images/fiveofhearts.jpg")),
    },
    {
      command: "Пятерка пик",
      callback: () => cbFunc(require("../images/fiveofspades.jpg")),
    },

    {
      command: "Четверка треф",
      callback: () => cbFunc(require("../images/fourofclubs.jpg")),
    },
    {
      command: "Четверка бубен",
      callback: () => cbFunc(require("../images/fourofdiamonds.jpg")),
    },
    {
      command: "Четверка червей",
      callback: () => cbFunc(require("../images/fourofhearts.jpg")),
    },
    {
      command: "Четверка пик",
      callback: () => cbFunc(require("../images/fourofspades.jpg")),
    },

    {
      command: "Тройка треф",
      callback: () => cbFunc(require("../images/threeofclubs.jpg")),
    },
    {
      command: "Тройка бубен",
      callback: () => cbFunc(require("../images/threeofdiamonds.jpg")),
    },
    {
      command: "Тройка червей",
      callback: () => cbFunc(require("../images/threeofhearts.jpg")),
    },
    {
      command: "Тройка пик",
      callback: () => cbFunc(require("../images/threeofspades.jpg")),
    },

    {
      command: "Двойка треф",
      callback: () => cbFunc(require("../images/twoofclubs.jpg")),
    },
    {
      command: "Двойка бубен",
      callback: () => cbFunc(require("../images/twoofdiamonds.jpg")),
    },
    {
      command: "Двойка червей",
      callback: () => cbFunc(require("../images/twoofhearts.jpg")),
    },
    {
      command: "Двойка пик",
      callback: () => cbFunc(require("../images/twoofspades.jpg")),
    }, */
  ];

  return commands;
};
