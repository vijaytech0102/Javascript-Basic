let arr=[1,4,5,6-7,-5,-1,45,6];
let newArr=arr.filter(positive);
function positive(a){
    return a>0;
}
console.log(arr);
console.log(newArr);
let sq=newArr.map((square)=>square*square);

console.log(sq);
let nr=[-1,5,6,7];
let k=nr.find(get,2);
function get(p)
{
        return p<0;
}
console.log(k);
let inde=nr.findIndex(index);
function index(l)
{
    return l==7;
}
console.log("index:",inde);

let su=nr.reduce(getsum,0);

 function getsum(sum,b)
 {
    return  sum+b;
 }
console.log("sum:",su);
let nam="Hello my Name is Vijay";
 nam=nam.split(" ");
console.log(nam);
let fil=nam.filter(filterString);
function filterString(a)
{
    console.log(a.charCodeAt(0));   
   if(a.charCodeAt(0)>=65 && a.charCodeAt(0)<=90){
       return a;
   }
}
console.log(fil.join(" "));
