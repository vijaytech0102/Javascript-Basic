let person={
    name:"Karan",
    age:23,
    marks:[56,76,89,67]
};

let {name, age}=person;
console.log(person);


(function  add()
{
    let a=90;
    let b=78;
    let c=a+b;
    console.log(c);
})();

(
       function()
   {
    console.log( arguments );
   }
  ) ( 1, 'Second', 3 );

  function sumArgs() {
    var result = 0;
    for( var i = 0; i < arguments.length; ++i ) {
        result += arguments[i];
    }
    return result;
}
console.log(sumArgs( 1, 2, 3, 4, 5 ));

arr=[1,2,3,4,5];
let {a,b,c,d,e}=arr;
  
function Add(){
    return arguments[0]+arguments[1];
}
let ans=Add(10,45);
console.log(ans);

let notgood = 'not good'.split('');
console.log(notgood);
let [,,,, ...not] = notgood;


console.log( not );
