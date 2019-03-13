// ncp
const path = require('path')
const ncp =  require('ncp')
let des = path.resolve(__dirname,'../test')
let src = path.resolve(__dirname,'../public')

console.log(des);
console.log(src);
// 即使不存在也没关系
ncp(src,des,e=>{
  console.log("error",e)
})
