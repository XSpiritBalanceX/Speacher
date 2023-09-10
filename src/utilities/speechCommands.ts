export const speechCommands = (cbFunc: Function) => {
  const commands = [
    {
      command: "Туз треф",
      callback: () => cbFunc(require("../images/aceofclubs.jpg")),
    },
    {
      command: "Туз бубен",
      callback: () => cbFunc(require("../images/aceofdiamonds.jpg")),
    },
    {
      command: "Туз червей",
      callback: () => cbFunc(require("../images/aceofhearts.jpg")),
    },
    {
      command: "Туз пик",
      callback: () => cbFunc(require("../images/aceofspades.jpg")),
    },
    {
      command: "Король треф",
      callback: () => cbFunc(require("../images/kingofclubs.jpg")),
    },
    {
      command: "Король бубен",
      callback: () => cbFunc(require("../images/kingofdiamonds.jpg")),
    },
    {
      command: "Король червей",
      callback: () => cbFunc(require("../images/kingofhearts.jpg")),
    },
    {
      command: "Король пик",
      callback: () => cbFunc(require("../images/kingofspades.jpg")),
    },

    {
      command: "Дама треф",
      callback: () => cbFunc(require("../images/queenofclubs.jpg")),
    },
    {
      command: "Дама бубен",
      callback: () => cbFunc(require("../images/queenofdiamonds.jpg")),
    },
    {
      command: "Дама червей",
      callback: () => cbFunc(require("../images/queenofhearts.jpg")),
    },
    {
      command: "Дама пик",
      callback: () => cbFunc(require("../images/queenofspades.jpg")),
    },

    {
      command: "Валет треф",
      callback: () => cbFunc(require("../images/jackofclubs.jpg")),
    },
    {
      command: "Валет бубен",
      callback: () => cbFunc(require("../images/jackofdiamonds.jpg")),
    },
    {
      command: "Валет червей",
      callback: () => cbFunc(require("../images/jackofhearts.jpg")),
    },
    {
      command: "Валет пик",
      callback: () => cbFunc(require("../images/jackofspades.jpg")),
    },

    {
      command: "Десятка треф",
      callback: () => cbFunc(require("../images/tenofclubs.jpg")),
    },
    {
      command: "Десятка бубен",
      callback: () => cbFunc(require("../images/tenofdiamonds.jpg")),
    },
    {
      command: "Десятка червей",
      callback: () => cbFunc(require("../images/tenofhearts.jpg")),
    },
    {
      command: "Десятка пик",
      callback: () => cbFunc(require("../images/tenofspades.jpg")),
    },

    {
      command: "Девятка треф",
      callback: () => cbFunc(require("../images/nineofclubs.jpg")),
    },
    {
      command: "Девятка бубен",
      callback: () => cbFunc(require("../images/nineofdiamonds.jpg")),
    },
    {
      command: "Девятка червей",
      callback: () => cbFunc(require("../images/nineofhearts.jpg")),
    },
    {
      command: "Девятка пик",
      callback: () => cbFunc(require("../images/nineofspades.jpg")),
    },

    {
      command: "Восьмерка треф",
      callback: () => cbFunc(require("../images/eightofclubs.jpg")),
    },
    {
      command: "Восьмерка бубен",
      callback: () => cbFunc(require("../images/eightofdiamonds.jpg")),
    },
    {
      command: "Восьмерка червей",
      callback: () => cbFunc(require("../images/eightofhearts.jpg")),
    },
    {
      command: "Восьмерка пик",
      callback: () => cbFunc(require("../images/eightofspades.jpg")),
    },

    {
      command: "Семерка треф",
      callback: () => cbFunc(require("../images/sevenofclubs.jpg")),
    },
    {
      command: "Семерка бубен",
      callback: () => cbFunc(require("../images/sevenofdiamonds.jpg")),
    },
    {
      command: "Семерка червей",
      callback: () => cbFunc(require("../images/sevenofhearts.jpg")),
    },
    {
      command: "Семерка пик",
      callback: () => cbFunc(require("../images/sevenofspades.jpg")),
    },

    {
      command: "Шестерка треф",
      callback: () => cbFunc(require("../images/sixofclubs.jpg")),
    },
    {
      command: "Шестерка бубен",
      callback: () => cbFunc(require("../images/sixofdiamonds.jpg")),
    },
    {
      command: "Шестерка червей",
      callback: () => cbFunc(require("../images/sixofhearts.jpg")),
    },
    {
      command: "Шестерка пик",
      callback: () => cbFunc(require("../images/sixofspades.jpg")),
    },

    {
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
    },
  ];

  return commands;
};
