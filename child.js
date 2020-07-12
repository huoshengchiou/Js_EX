// const x=;

const calculator = (a, b) => {
  return a + b;
};

console.log("before", module);
module.exports.sum = calculator;

//module.exports.自訂想輸出的名稱 = 這個file裡的函數、變數等等

console.log("after", module);

//module物件會在exports進行extend

// Module Wrapper Function
