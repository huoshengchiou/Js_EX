import User from "./user.js";

import U, { printName as printUname, printAge } from "./user.js";

// must .js
// ./relative /absolute  path

// const user = new User("Sheng", 25);
const user = new U("Sheng", 25);

console.log(user);

printUname(user);
