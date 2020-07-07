//cd before run
let X = 123;

console.log("A start");

//只能讀不能用
require("./b.js");

console.log("A end");

console.log("X", X);

// 模組作用域其實就是 檔案作用域，只要不是寫在自己本身的變數或函式，即使我載入了你，我還是不能取用你的東西的，載入就是單純執行對方內部的程式碼而已。
// Node.js 中預設模組是封閉了，你可以載入我，但你取用不到我任何的成員，內部無法取用外部; 外部也無法取用內部。

// 導出 (exports)
// Node 中的 require 方法有兩個作用

// 載入模組並執行裡面的程式碼 (也就是上面的例子)
// 拿到被加載模組所導出的接口物件
// 在每個模組中都提供一個物件 exports，我們可以將它導出，並讓其他模組接收，而它預設是一個空的物件

// ------沒有導出---------

// 利用一個變數 require 了 B.js 的接口物件
const result = require("./b.js");

console.log(result);
