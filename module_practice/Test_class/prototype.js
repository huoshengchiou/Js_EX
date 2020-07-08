// function Person(name) {
//   this.name = name;
//   this.getName = () => {
//     return this.name;
//   };
// }

// const nick = new Person("nick");
// const peter = new Person("peter");
// // /f
// console.log(nick.getName === peter.getName);
// console.log(nick.getName());

// 因為 instance 的記憶體位置不同，會被視為不同的方法。 //記憶體佔用增加
// nick.getName = () => {
//   console.log("change");
// };

// nick.getName();
// console.log(peter.getName());






// ----------------prototype--------------//如果要共用方法//一即全
// prototype 的出現是為了達到所有 instance 都能共享 property & method


function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
}

const nick = new Person('nick');
const peter = new Person('peter');
console.log(nick.getName === peter.getName);


// nick.getName=====>no====>prototype=====>use same func 





//create instance====>add .__proto__ ======>method路標
console.log(nick.__proto__ === Person.prototype)


// => Person.__proto__ === Person.prototype
// => Person.__proto__.__proto__ === Object.prototype
// => Person.prototype.__proto__ === Object.prototype
// => Object.prototype === null

// 而 Person (constructor) 的原型又會指向 Object，這樣鍊型的關係達到了繼承的效果，而又稱為原型鍊。


// nick
// nick.__proto__
// ( = Person.prototype )
// nick.__proto__.__proto__
// ( = Person.prototype.__proto__ )
// ( = Object.prototype )
// nick.__proto__.__proto__.__proto__ => 最上層，也就是 null
// ( = Person.prototype.__proto__.__proto__ )
// ( = Object.prototype.__proto__ )

//找到最近的method使用

