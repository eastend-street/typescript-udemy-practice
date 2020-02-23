export {};

// let bmi：の後ろに関数の型を定義できる
let bmi: (height: number, weight: number) => number = function(
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.78, 86));
