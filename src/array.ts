export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3]; // Array<number>とも書けるが非推奨
// Arrayの部分はオリジナルの型をつくる。<number>はジェネリクス

let strings2: Array<string> = ["tokyo", "osaka", "kyoto"];

let strings: string[] = ["TypeScript", "JavaScript", "CoffeeScript"];

let twoDimensionalArray: number[][] = [
  [50, 100],
  [50, 300]
];

let array: (string | number | boolean)[] = [1, false, "Japan"];
