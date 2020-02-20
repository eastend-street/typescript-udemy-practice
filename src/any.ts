import axios from "axios";
export {};

let url: string =
  "http://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url).then(response => {
  // responseは型推論できないので、型推論ではanyと表示されるので、自分で書く必要がある
  //   let data: any = response.data;
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  //   let data: object[] = response.data; // objectだとまだ中身がわからないので、interfaceで定義する
  let data: Article[] = response.data;
  console.log(data);
});
