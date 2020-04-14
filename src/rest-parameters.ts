export {};

const reducer = (accumulator: number, currentValue: number) => {
  return accumulator + currentValue;
};

// ...のrest parameterは配列なので[]で定義する
const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
