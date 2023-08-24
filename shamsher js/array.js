let arr=[3,4,2,5,6];
console.log(arr.length);
arr.push(56);
console.log(arr);
arr.pop();
console.log(arr);
// unshift add element at begining of the array
arr.unshift(45);
console.log(arr);
// shift remove element from the begining of the array
arr.shift(45);
console.log(arr);

let a=arr.toString();
console.log(a);
let k=arr.join('*');
console.log(k);
let newarray=k.split("*");
console.log(newarray);
let a1=[5,6,89,0];
let a2=[5,4,9,0,5,7,8];
a1=a1.concat(a2);
console.log(a1);
arr.splice(0, 3, 90,78);
console.log(arr);
let i=[1,2,3,4,5];
i.copyWithin(2,3,5);
console.log(i);

