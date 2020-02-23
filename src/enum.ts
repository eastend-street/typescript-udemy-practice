export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// jsで連番を付与する場合は連想配列を定義しないといけない
// const MonthsJS = {
//   January: 0,
//   February: 1
// };

// console.log(MonthsJS.January);
// console.log(MonthsJS.February);

enum COLORS {
  RED = "#FF0000",
  WHITE = "FFFFFF",
  GREEN = "#008000",
  BLUE = "#0000FF",
  BLACK = "#000000"
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = "#FFFF00",
  GRAY = "#808080"
}

COLORS.YELLOW; // jsだと存在しないプロパティは実行時エラーになるが、TypeScriptのenumならエラーを事前に検知できる
