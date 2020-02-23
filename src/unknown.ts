export {};

const Kansu = (): number => 43;

let numberAny: any = Kansu();
let numberUnknown: unknown = Kansu(); //型が不明なので+10をしようとしてもエラーとなる。でも+10する前にif文で型チェックすればOK

let sumAny = numberAny + 10;
// if文でtypeチェックを行なってから行うことをタイプガードという
if (typeof numberUnknown === "number") {
  let sumUnknown = numberUnknown + 10;
}
