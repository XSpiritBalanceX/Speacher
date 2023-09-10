export const scoreCounter = (cardsName: { name: string; suit: string }[]) => {
  let total = 0;

  if (cardsName.length === 1) {
    cardsName.forEach((el) => {
      total += Number(el.name);
    });
  } else if (cardsName.length === 2) {
    cardsName.forEach((el, ind, arr) => {
      if (ind !== arr.length - 1 && el.suit === arr[ind + 1].suit) {
        total = Number(arr[ind].name) + Number(arr[ind + 1].name);
      } else if (ind !== arr.length - 1 && el.suit !== arr[ind + 1].suit) {
        total = Math.max(Number(arr[ind].name), Number(arr[ind + 1].name));
      }
    });
  }

  return total;
};
