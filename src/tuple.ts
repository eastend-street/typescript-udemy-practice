export {};

// union型だとstring, numberの順序が入れ替わっても許容されてしまう
// tuple型にすることで、順序を指定できる
// 型推論では出てこないので注意
let profile: [string, number] = ["ham", 43];
// profile = [43, "ham"];  
