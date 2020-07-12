//class是prototype syntax suger
// 非靜態的複製定義，而只是物件間的連結，因此若不小心變更了父類別的方法或屬性，子類別與其實體都會受到影響。

class Dice {
  constructor() {
    this.num = Math.random();
  }
  rand() {
    console.log(`Random: ${this.num}`);
  }
}

var d1 = new Dice();
d1.rand();

Dice.prototype.rand = function () {
  const result = Math.round(this.num * 10 + 1);
  console.log(`Random: ${result}`);
};
var d2 = new Dice();
d2.rand();
// d2==>d1
// d1.rand();

function randomDice(a = 1) {
  const b = Math.random();
  const runCode = () => {
    a = Math.round(b * a + 1);
    // console.log(a);
    return a;
  };
  return runCode;
}

const test1 = randomDice();
console.log("test1:", test1());

const test2 = randomDice(10);
console.log("test2:", test2());

// function plus() {
//   let initial = 0;
//   const runCode = () => {
//     initial += 1;
//     return initial;
//   };
//   return runCode;
// }

// const test3 = plus();
// console.log("test3", test3());
// console.log("test3", test3());
// const test4 = plus();
// console.log("test4", test4());

class P {
  foo() {
    console.log("P.foo");
  }
}
class C extends P {
  foo() {
    super.foo();
  }
}

const C1 = new C();
C1.foo();

const D = {
  foo: function () {
    console.log("D.foo");
  },
};

const E = {
  foo: C.prototype.foo,
};
// 將 E 連結到 D 以進行委派
Object.setPrototypeOf(E, D);

D.foo();
E.foo();



