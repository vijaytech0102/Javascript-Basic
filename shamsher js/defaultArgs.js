
function calculatePrice({
    total = 0,
    tax = 0.1,
    tip = 0.05} ){
        console.log(tax,total, tip);
    console.log(total + (total * tax) + (total * tip));
  }
  
  const bill = calculatePrice({total:150 ,tip: 0.15, tax:20});
  // 187.5
  
  let  obj ={
    a:10,
    b:67
  };
  console.log(obj.a);
  // ES5 function
  function Additoion(hindi=90, eng=89, math=78){
    console.log("Hindi:", hindi);
    console.log("English:", eng);
    console.log("math:", math);
    console.log(hindi+eng+math);
  }

    Additoion(25, 26, 27);
  // default arguement
  function Add({
    hindi=90,
    eng=98,
    math=67,
    sci=78

  }){
    console.log("Hindi:",hindi);
    console.log("Eng:",eng);
    console.log("Math:",math);
    console.log("sci:",sci);
    console.log(hindi+eng+math+sci);
  }

  const result= Add({eng:78,hindi:0});

const a=90;

console.log(a);
// error
let k=90;
k=89;
console.log(k);

var j=90;
var j=89;
console.log(j);


  let code = "ABCDEFG";
  code=code.toLowerCase();
console.log(code.startsWith("ABB"));
// false
console.log(code.startsWith("abc"));
// false, startsWith is case sensitive
console.log(code.startsWith("ABC"));
// true
