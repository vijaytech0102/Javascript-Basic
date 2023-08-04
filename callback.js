// function sub(a,b){
//     console.log(a-b);
// }
// add(19,23);
// sub(12,10);
// function add(a,b)
// {
//     console.log(a+b);
// }
// // callback --> A callback is a function passed as an arguement to another function..
// // This technique allows a function to call another function..
// function display(some) {
//     document.getElementById("demo").innerHTML=some;
// }
// function A(){
//     display("Hello");
//  }
//  function B(){
//     display("hii");
//  }

//  B();
//  A();
// 
// function display(result){
//     document.getElementById("demo").innerHTML="Result:"+result;
// }

// function Calulator(n1, n2, callback){
//     let sum= n1+n2;
//     callback(sum);
// }

// Calulator(10, 12, display);

 function removeNeg(number, callback){
    const newArr=[];
    for ( const x of number){
        if(callback(x))
            {
                newArr.push(x);
            }
    }
    return newArr;
 }
 const num=[1,2,3,-4,5,3-4,3,-1,-2, -8];
const postive=removeNeg(num, (x)=> x>=0);
console.log(postive);


function print(message, callback){
    setTimeout( function(){
        console.log(message,"hello world settimeout");
        callback;
    },3000);
    
}
 function getMessage()
{   setTimeout(function(){
    console.log("Hello callback function");

},1000);
}

print("hii",getMessage());