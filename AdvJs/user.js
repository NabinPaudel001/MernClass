import User from './index.js'
// const User =require('./index.js')
// const {funcA:a, funcB}=require('./functions.js')
// to directly import
// const Functions =require('./functions.js')
// import {funcA,funcB,funcC,funcD,funcE,funcF} from './functions.js'

import * as Functions from './functions.js'
const user = new User('Ram',22,'KTM')
console.log(user)
console.log(Functions.funcA())
// console.log(funcB())