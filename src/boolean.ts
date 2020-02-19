export {}; // exportをしないと、下のnameがグローバルで定義されてしまうのでエラーとなる。

let name = "TypeScript"

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished });
