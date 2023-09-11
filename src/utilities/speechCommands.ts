export const speechCommands = (cbFunc: (id: number) => void) => {
  const commands = [
    {
      command: ["Туз треф", "Туз крести", "Тус треф", "Тус крести"],
      callback: () => cbFunc(1),
    },
    {
      command: [
        "Туз бубен",
        "Туз буби",
        "Туз бубны",
        "Тус бубен",
        "Тус буби",
        "Тус бубны",
      ],
      callback: () => cbFunc(2),
    },
    {
      command: [
        "Туз червей",
        "Туз червы",
        "Туз черви",
        "Тус червей",
        "Тус червы",
        "Тус черви",
      ],
      callback: () => cbFunc(3),
    },
    {
      command: ["Туз пик", "Туз пики", "Тус пики", "Трус пик"],
      callback: () => cbFunc(4),
    },
    {
      command: ["Король треф", "Король крести"],
      callback: () => cbFunc(5),
    },
    {
      command: ["Король бубен", "Король буби", "Король бубны"],
      callback: () => cbFunc(6),
    },
    {
      command: ["Король червей", "Король червы", "Король черви"],
      callback: () => cbFunc(7),
    },
    {
      command: ["Король пик", "Король пики"],
      callback: () => cbFunc(8),
    },

    {
      command: ["Дама треф", "Дама крести"],
      callback: () => cbFunc(9),
    },
    {
      command: ["Дама бубен", "Дама буби", "Дама бубны"],
      callback: () => cbFunc(10),
    },
    {
      command: ["Дама червей", "Дама червы", "Дама черви"],
      callback: () => cbFunc(11),
    },
    {
      command: ["Дама пик", "Дама пики"],
      callback: () => cbFunc(12),
    },

    {
      command: ["Валет треф", "Валет крести"],
      callback: () => cbFunc(13),
    },
    {
      command: ["Валет бубен", "Валет буби", "Валет бубны"],
      callback: () => cbFunc(14),
    },
    {
      command: ["Валет червей", "Валет червы", "Валет черви"],
      callback: () => cbFunc(15),
    },
    {
      command: ["Валет пик", "Валет пики"],
      callback: () => cbFunc(16),
    },

    {
      command: ["Десятка треф", "Десятка крести"],
      callback: () => cbFunc(17),
    },
    {
      command: ["Десятка бубен", "Десятка буби", "Десятка бубны"],
      callback: () => cbFunc(18),
    },
    {
      command: ["Десятка червей", "Десятка червы", "Десятка черви"],
      callback: () => cbFunc(19),
    },
    {
      command: ["Десятка пик", "Десятка пики"],
      callback: () => cbFunc(20),
    },

    {
      command: ["Девятка треф", "Девятка крести"],
      callback: () => cbFunc(21),
    },
    {
      command: ["Девятка бубен", "Девятка буби", "Девятка бубны"],
      callback: () => cbFunc(22),
    },
    {
      command: ["Девятка червей", "Девятка червы", "Девятка черви"],
      callback: () => cbFunc(23),
    },
    {
      command: ["Девятка пик", "Девятка пики"],
      callback: () => cbFunc(24),
    },

    {
      command: ["Восьмёрка треф", "Восьмёрка крести"],
      callback: () => cbFunc(25),
    },
    {
      command: ["Восьмёрка бубен", "Восьмёрка буби", "Восьмёрка бубны"],
      callback: () => cbFunc(26),
    },
    {
      command: ["Восьмёрка червей", "Восьмёрка червы", "Восьмёрка черви"],
      callback: () => cbFunc(27),
    },
    {
      command: ["Восьмёрка пик", "Восьмёрка пики"],
      callback: () => cbFunc(28),
    },

    {
      command: ["Семёрка треф", "Семёрка крести"],
      callback: () => cbFunc(29),
    },
    {
      command: ["Семёрка бубен", "Семёрка буби", "Семёрка бубны"],
      callback: () => cbFunc(30),
    },
    {
      command: ["Семёрка червей", "Семёрка червы", "Семёрка черви"],
      callback: () => cbFunc(31),
    },
    {
      command: ["Семёрка пик", "Семёрка пики"],
      callback: () => cbFunc(32),
    },

    {
      command: ["Шестёрка треф", "Шестёрка крести"],
      callback: () => cbFunc(33),
    },
    {
      command: ["Шестёрка бубен", "Шестёрка буби", "Шестёрка бубны"],
      callback: () => cbFunc(34),
    },
    {
      command: ["Шестёрка червей", "Шестёрка червы", "Шестёрка черви"],
      callback: () => cbFunc(35),
    },
    {
      command: ["Шестёрка пик", "Шестёрка пики"],
      callback: () => cbFunc(36),
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
