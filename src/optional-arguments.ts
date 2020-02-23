export {};

const bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.78, 86, true);

// bmi(身長、体重、consoleで出力するかどうか)
// bmi(1.78, 86, true)
// bmi(1.78, 86, false)
// bmi(1.78, 86)　→引数なしの場合は出力しない
