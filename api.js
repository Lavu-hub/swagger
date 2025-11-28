 const sm=require('./sum')
 const smnew=require('./divide')
let c=sm.total(10,20)
 let d=sm.minus(10,20)
 let e=smnew(10,20)
 console.log("sum is"+c);
console.log("minus is"+d);
 console.log("new sum is is"+e);
let arr=sm.array;
console.log(arr);
const st=require('./student')
console.log(st.arr);
console.log(__dirname);