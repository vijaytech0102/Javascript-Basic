function add1()
{
    let a=90;
    let b=89;
    console.log(a+b)
}
console.log(add(10,34));
function add(a,b)
{
        return a+b;
}
function add2()
{
    let a=10;    
    let b=10;    
    return a+b;0
}
console.log(add2());
function add3(a,b)
{
    console.log(a+b)
}
add3(10,4);

add1();

let ad=function ad(a,b){ return a+b};
let sub=function sub(a,b){ return a-b};
let Mul=function mul(a,b){ return a*b};
let div=function div(a,b){ return a/b};
let mod=function mod(a,b){ return a%b};

let operation=[ad, sub, Mul, div, mod];
for(let i=0; i<operation.length; i++)
{
    console.log(operation[i](12,10));
}

let car={
    name:"BMW",
    Model:"2015",
    drive:function(){
        console.log("still driving!!!!!!!");
    }
}
console.log(car.name);
console.log(car.Model);
car.drive();