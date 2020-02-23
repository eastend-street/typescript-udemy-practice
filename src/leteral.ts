export {};

// literal型を使う時　例）特定の文字列のみ許容したい時。曜日のみ許容したい
let dayOfTheWeek: "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" = "Sun";
dayOfTheWeek = "Mon";
// dayOfTheWeek = "Hello";

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13;

// booleanはもともと有限なのでほぼ使わない
let TRUE: true = true;
// TRUE = false;
