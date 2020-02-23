export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Sakaki: Pitcher1 = {
  throwingSpeed: 154
};

const Otiai: Batter1 = {
  //   throwingSpeed: 154,
  battingAverage: 0.367
};

// type TwoWayPlayer = {
//   battingAverage: number;
//   throwingSpeed: 154;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

// & を使うことで、既存の型を組み合わせて使うことができる
const Otani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};
