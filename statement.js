// if- else statements
let age=45;
if(age>18){
    console.log("Eligible for voting");
}
else{
    console.log("Not elible for voting");
}

// if else-if else statement
// find the largest number between three numbers.. using else if statement
let a=90
let b=98
let c=78

if(a>b && a>c){
    console.log('a is largest');
}
else if(b>c){
    console.log('b is largest');
}
else{
    console.log("c is largest");
}
// nested else-if statement

// find the largest number between five number using nested else if statements
let k=90
let j=98
let l=89
let m=78
let n=34

if(k>j && k>l && k>m && k>n)
{
    console.log("k is greatest");
}
else if(j>l && j>m && j>n){
    console.log(" j is largest");
}
else if(l>m && l>n)
{
    console.log("l is largest");
}
else if(m>n)
{
    console.log("m is largest");
}
else{
    console.log(" n is largest");
}