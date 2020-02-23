export {};

let profile1: object = { name: "ham" }; // objectの中身(プロパティ)は設定できないので、中身を変えられる

profile1 = { birthYear: 1976 };

// {}を使うとオブジェクトの中身まで指定できる
let profile2: {
  name: string;
} = { name: "ham" };
// profile2 = { birthYear: 1976 };
profile2 = { name: "john" };
