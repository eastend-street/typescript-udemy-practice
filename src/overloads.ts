export {};
// overloadではsignatureを定義することで関数の型制約をして間違った値を跳ねることができるï

// signature
function double(value: number): number;
function double(value: string): string;

// 関数の実体（型の制約はsignatureで定義しているので、ここではany型でよいï）
function double(value: any): any {
  if (typeof value === "number") return value * 2;
  else return value + value;

  // 型制約はsignatureで担保されているのでここまでこない
  //   else {
  //     throw "It's not number or string. Make sure argument data type.";
  //   }
}

// const double = (value: number): number => {
//   return value * 2;
// };

// const double = (value: string): string => {
//   return value + value;
// };

console.log(double(100));
console.log(double("Go "));
// console.log(double(true));
