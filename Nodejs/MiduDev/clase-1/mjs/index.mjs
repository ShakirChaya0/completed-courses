// .js -> por defecto utiliza CommonJS
// .mjs -> por defecto utiliza ESM(ECMAScript Modules)
// .cjs -> para utilizar CommonJS

import {sum} from './sum.mjs'
import {sub} from './sum.mjs'
import {mul} from './sum.mjs'       

console.log(sum(1,2))
console.log(sub(1,2))
console.log(mul(1,2))