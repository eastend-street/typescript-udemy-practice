export {};

type Mojiretsu = string; // typeの変数は大文字で始める

const fooString: string = "hello";
const fooMojiretsu: Mojiretsu = "hello";

const example1: { name: string; age: number } = {
  name: "ham",
  age: 43
};

type Profile = { name: string; age: number };

const example2: Profile = {
  name: "ham",
  age: 43
};

type Profile2 = typeof example1; // 定義した変数から型を生成できるので、元の値に変化があっても対応できる
