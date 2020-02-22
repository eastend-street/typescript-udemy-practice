export {};

//呼び元に戻ってこないとき（例外が発生するとき）にneverを使う
// voidはreturnされるが値がない、neverはreturnされないことを示す
function error(message: string): never {
  throw new Error(message);
}

try {
  const result = error("test");
  console.log(result);
} catch (error) {
  console.log(error);
}

let foo: void = undefined; // voidは値が返ってくるが、値はないので、undefinedが返ってきてもOK
// let bar: never = undefined; //never型は値が返ってこないのに、undefinedを返しているのでエラーになる
let baz: never = error("only me"); // errorがかえる場合はneverでOK
