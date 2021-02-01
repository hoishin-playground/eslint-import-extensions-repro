import { foo } from "./export1"; // error
console.log(foo);

export * from "./export2"; // not error
