/*  Task 1  */

/* Var 1 */

function concat(stringOne: string, stringTwo: string): string {
  return `${stringOne}${stringTwo}`;
}

/* Var 2 */

type TypeFn = (stringOne: string, stringTwo: string) => string;

const concatFn: TypeFn = (stringOne, stringTwo) => `${stringOne}${stringTwo}`;


/*  Task 2  */

interface IndexInterface {
  [n: string]: string | (number | string)[]
}

type TsObj = {
  howIDoIt: string,
  simeArray: (number | string)[]
};

interface SuperIndexInterface {
  [n: string]: string | (number | string)[] | TsObj[]
}

const MyHometask: SuperIndexInterface = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }]
}

/*  Task 3  */

interface MyArray<T> {
  [N: number]: T;

  reduce(fn: (sum: T, i: T) => T, el: T): T;
}

const tsArr: MyArray<number> = [1, 2, 3];

// console.log(tsArr.reduce((sum, i) => sum + i, 0));
