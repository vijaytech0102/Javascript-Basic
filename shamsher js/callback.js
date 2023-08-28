// callback function--> When a function is passed as arguement is known as callback function.

function message(m, callback){
    console.log(m);
     return callback;
}

function add(){        
    return 10+90;
}

function sub()
{
    return 90-10;
}
  let ans=message("hello",sub(),add());
 console.log(ans);

function secondcallback(message, callback)
{
    console.log(message);
   return callback;
}

let arr=secondcallback("second callback function",message("inside message", add()));
 console.log(arr);



 

function Add(n1, n2){
    let sum=parseInt(n1)+ parseInt(n2);
    display(sum);
}
let a=prompt('Enter the value of a');
let b=prompt('Enter the value of b');
Add(a,b);
function display(some){
    document.getElementById("demo").innerHTML=some;
}
