export const speechCommands = (
  cbFunc: (image: string, card: { name: string; suit: string }) => void
) => {
  const commands = [
    {
      command: "Туз треф",
      callback: () =>
        cbFunc(require("../images/aceofclubs.jpg"), {
          name: "11",
          suit: "треф",
        }),
    },
    {
      command: "Туз бубен",
      callback: () =>
        cbFunc(require("../images/aceofdiamonds.jpg"), {
          name: "11",
          suit: "бубен",
        }),
    },
    {
      command: "Туз червей",
      callback: () =>
        cbFunc(require("../images/aceofhearts.jpg"), {
          name: "11",
          suit: "червей",
        }),
    },
    {
      command: "Туз пик",
      callback: () =>
        cbFunc(require("../images/aceofspades.jpg"), {
          name: "11",
          suit: "пик",
        }),
    },
    {
      command: "Король треф",
      callback: () =>
        cbFunc(require("../images/kingofclubs.jpg"), {
          name: "10",
          suit: "треф",
        }),
    },
    {
      command: "Король бубен",
      callback: () =>
        cbFunc(require("../images/kingofdiamonds.jpg"), {
          name: "10",
          suit: "бубен",
        }),
    },
    {
      command: "Король червей",
      callback: () =>
        cbFunc(require("../images/kingofhearts.jpg"), {
          name: "10",
          suit: "червей",
        }),
    },
    {
      command: "Король пик",
      callback: () =>
        cbFunc(require("../images/kingofspades.jpg"), {
          name: "10",
          suit: "пик",
        }),
    },

    {
      command: "Дама треф",
      callback: () =>
        cbFunc(require("../images/queenofclubs.jpg"), {
          name: "10",
          suit: "треф",
        }),
    },
    {
      command: "Дама бубен",
      callback: () =>
        cbFunc(require("../images/queenofdiamonds.jpg"), {
          name: "10",
          suit: "бубен",
        }),
    },
    {
      command: "Дама червей",
      callback: () =>
        cbFunc(require("../images/queenofhearts.jpg"), {
          name: "10",
          suit: "червей",
        }),
    },
    {
      command: "Дама пик",
      callback: () =>
        cbFunc(require("../images/queenofspades.jpg"), {
          name: "10",
          suit: "пик",
        }),
    },

    {
      command: "Валет треф",
      callback: () =>
        cbFunc(require("../images/jackofclubs.jpg"), {
          name: "10",
          suit: "треф",
        }),
    },
    {
      command: "Валет бубен",
      callback: () =>
        cbFunc(require("../images/jackofdiamonds.jpg"), {
          name: "10",
          suit: "бубен",
        }),
    },
    {
      command: "Валет червей",
      callback: () =>
        cbFunc(require("../images/jackofhearts.jpg"), {
          name: "10",
          suit: "червей",
        }),
    },
    {
      command: "Валет пик",
      callback: () =>
        cbFunc(require("../images/jackofspades.jpg"), {
          name: "10",
          suit: "пик",
        }),
    },

    {
      command: "Десятка треф",
      callback: () =>
        cbFunc(require("../images/tenofclubs.jpg"), {
          name: "10",
          suit: "треф",
        }),
    },
    {
      command: "Десятка бубен",
      callback: () =>
        cbFunc(require("../images/tenofdiamonds.jpg"), {
          name: "10",
          suit: "бубен",
        }),
    },
    {
      command: "Десятка червей",
      callback: () =>
        cbFunc(require("../images/tenofhearts.jpg"), {
          name: "10",
          suit: "червей",
        }),
    },
    {
      command: "Десятка пик",
      callback: () =>
        cbFunc(require("../images/tenofspades.jpg"), {
          name: "10",
          suit: "пик",
        }),
    },

    {
      command: "Девятка треф",
      callback: () =>
        cbFunc(require("../images/nineofclubs.jpg"), {
          name: "9",
          suit: "треф",
        }),
    },
    {
      command: "Девятка бубен",
      callback: () =>
        cbFunc(require("../images/nineofdiamonds.jpg"), {
          name: "9",
          suit: "бубен",
        }),
    },
    {
      command: "Девятка червей",
      callback: () =>
        cbFunc(require("../images/nineofhearts.jpg"), {
          name: "9",
          suit: "червей",
        }),
    },
    {
      command: "Девятка пик",
      callback: () =>
        cbFunc(require("../images/nineofspades.jpg"), {
          name: "9",
          suit: "пик",
        }),
    },

    {
      command: "Восьмёрка треф",
      callback: () =>
        cbFunc(require("../images/eightofclubs.jpg"), {
          name: "8",
          suit: "треф",
        }),
    },
    {
      command: "Восьмёрка бубен",
      callback: () =>
        cbFunc(require("../images/eightofdiamonds.jpg"), {
          name: "8",
          suit: "бубен",
        }),
    },
    {
      command: "Восьмёрка червей",
      callback: () =>
        cbFunc(require("../images/eightofhearts.jpg"), {
          name: "8",
          suit: "червей",
        }),
    },
    {
      command: "Восьмёрка пик",
      callback: () =>
        cbFunc(require("../images/eightofspades.jpg"), {
          name: "8",
          suit: "пик",
        }),
    },

    {
      command: "Семёрка треф",
      callback: () =>
        cbFunc(require("../images/sevenofclubs.jpg"), {
          name: "7",
          suit: "треф",
        }),
    },
    {
      command: "Семёрка бубен",
      callback: () =>
        cbFunc(require("../images/sevenofdiamonds.jpg"), {
          name: "7",
          suit: "бубен",
        }),
    },
    {
      command: "Семёрка червей",
      callback: () =>
        cbFunc(require("../images/sevenofhearts.jpg"), {
          name: "7",
          suit: "червей",
        }),
    },
    {
      command: "Семёрка пик",
      callback: () =>
        cbFunc(require("../images/sevenofspades.jpg"), {
          name: "7",
          suit: "пик",
        }),
    },

    {
      command: "Шестёрка треф",
      callback: () =>
        cbFunc(require("../images/sixofclubs.jpg"), {
          name: "6",
          suit: "треф",
        }),
    },
    {
      command: "Шестёрка бубен",
      callback: () =>
        cbFunc(require("../images/sixofdiamonds.jpg"), {
          name: "6",
          suit: "бубен",
        }),
    },
    {
      command: "Шестёрка червей",
      callback: () =>
        cbFunc(require("../images/sixofhearts.jpg"), {
          name: "6",
          suit: "червей",
        }),
    },
    {
      command: "Шестёрка пик",
      callback: () =>
        cbFunc(require("../images/sixofspades.jpg"), {
          name: "6",
          suit: "пик",
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
