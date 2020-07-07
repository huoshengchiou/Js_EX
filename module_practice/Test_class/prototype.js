function Person(name) {
  this.name = name;
  this.getName = () => {
    return this.name;
  };
}

const nick = new Person("nick");
const peter = new Person("peter");
// /f
console.log(nick.getName === peter.getName);
console.log(nick.getName());

// 因為 instance 的記憶體位置不同，會被視為不同的方法。
nick.getName = () => {
  console.log("change");
};

nick.getName();
console.log(peter.getName());

//如果要共用方法//一即全
