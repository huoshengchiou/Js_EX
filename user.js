// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const printName = (user) => {
//   console.log(`Username:${user.name}`);
// };

// const printAge = (user) => {
//   console.log(`Userage:${user.age}`);
// };

// export default User;
// export { printName, printAge };

//only one
export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export const printName = (user) => {
  console.log(`Username:${user.name}`);
};

export const printAge = (user) => {
  console.log(`Userage:${user.age}`);
};

// export default () => {
//   console.log("匿名函式");
// };
