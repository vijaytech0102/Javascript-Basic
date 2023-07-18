let x;
console.log(typeof(x));
x=5
console.log(typeof(x));
x="Hello"
console.log(typeof(x));
let y=null;
console.log(y);
x= BigInt(1212121232323236767676767566567676769889988878787)
console.log(x);
// boolean
x=true
console.log(typeof(x))
obje={value1:1,value2:4,value3:6}
obj={value1:1,value:4,value3:6}
console.log(obje)
console.log(obj)
//operators in javascript..

// relational operators--

// relational operators also returns true or false value depending the conditions..
let a=10
let b=30
if(a<b)
{
    console.log(true);
    console.log('less than');
}
if(a<=b)
{
    console.log(true);
    console.log('less than equals to');
}
if(30>4)
{
    console.log(true);
    console.log('greater than');
}
if(78>=78)
{
    console.log(true);
    console.log('greater than equals to');
}. 
if(45==45)
{
    console.log(true);
    console.log('eqauls eqauls to');
}
if(56===56)
{
    console.log(true);
    console.log('triple eqauls to');
}
if(56!=='hello')
{
    console.log(true);
    console.log('double not equals to');
}
if(56!=56)
{
    
    console.log(true);
    console.log('not equals to');
}
// logical operators-- These are the operators used to combine two or more relational conditons or expressions.
 // 1. logical AND operator.
 // 2. Logical OR Operator.
 // 3. logical Not operator.

 // to find the largest number betwwen three numbers..
 a=90
 b=899
 c=7800
if(a>b){
    if(a>c)
    {
        console.log("a is largest");
    }
}
if(b>a){
    if(b>c)
    {
        console.log("b is largest");
    }
}
if(c>a){
    if(c>b)
    {
        console.log("c is largest");
    }
}
// Logical and Operator-- It requires all the relational condition must be true then it returns true otherwise false(&&)
if(a>b && a>c){
    console.log(" a is largest");
}
if(b>a && b>c){
    console.log("b is largest");
}
if(c>a && c>b){
    console.log("c is largest");
}
// logical or operator-- if one of the any relational condition is true then it returns true otherwise false..(||)
if(a==12||a==90){
    console.log(" a is 90");
}
if(a==90||a==12){
    console.log(" a is 90");
}
// Logical not operator-- It convert true into false and false into true.(!)
if(!true){
    console.log("logical not operator");
}
if(!false){
    console.log("logical not operator");
}

// Bitwise operators--> These are the operators used for bit manipulation(reduce or increase or shift).. They works on bits. 
//1. Bitwise AND operator--&
//2. Bitwise OR opertor--|
//3. Bitwise complement operator0--~
//4. Bitwise left shift operator--<<
//5. Bitwise right shift operator.-->>
//6.Bitwise Xor Operator--^-- If boths bits are different then it returns true other wise false..
// bits---> 0|1 binary numbers..
// 64-- decimal number---> binary number---> smallest number 1 byte---> 2^8
a=5
b=6 
c=a&b
console.log(c);
// bitwise or operator
a=5
b=6 
c=a|b
console.log(c);

a=90
// bitwise complement(-(a+1)) denoted by tilde sign
console.log(~a);

// Bitwise shift operators
// 1. lefft shift  operator(<<)--> they shift the bits in the multiple of 2^x--> increase in the form 2^x where x is the number of bits to be shifted
//2. right shift operator(>>)--> they shifts the bits in division of 2^x--> decrease in the form of 2^x where x is the number of bits to be shifted..

a=20
b=6
console.log(a<<2);
console.log(a>>2);


