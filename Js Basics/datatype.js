
let person={
    name:"karan",
    age:23,
    phone:45
};
console.log("Hello World");
console.log(person.name);
// Binary operators
// 1. Arithmetic operators: 1. Addtion 2. Subtraction, 3. multiplication, 4.Modulous:--> Remainder 

// Modulous remainder
let a=10;
let k="10";
let c=a==k;
console.log("Result of:",c);
c=a===k;
console.log("result of c:", c);
let m=10;
let n="10";
let res=m!=n;
console.log("value of res:",res);
res=m!==n;
console.log("Value of res", res);

let i=10,j=90,l=55;
if(i>j && i>l)
{
    console.log("i is largest",i);
}
if(j>i && j>l)
{
    console.log("j is largest",j);
}
if(l>i && l>j)
{
    console.log("l is largest",l);
}

let ch="e";

if(ch=="a"|| ch=="e"|| ch=="i"|| ch=="o" || ch=="u")
{
    console.log("Vowel");
}
else{
    console.log("Consonant");
}
