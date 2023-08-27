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
let ar=[12,67,45,34,45];
ar=ar.fill(6,3,5);
console.log(ar);

// indexof( find the first occurence of an element in the array
let index=ar.indexOf(45);
console.log(index);
let ind=arr.indexOf(45);
console.log(ind);

// next time
arr=arr.sort();
console.log(arr);
let str=["Hello", "Hii","Namsate"];
let j=str.valueOf();
console.log(j);

// 2-D array
// Rows & columns---> they are stored in matrix format... each element have particular location.

let twoD=[[1,2,4,], [5,6,7], [8, 9,2]];

// access each element of the array

let ans=0
console.log(ans);
let tc="";
let d=0;
let d2=0;
let newarr=[[],[],[]];
for(let i=0; i<3; i++)
{
    for(let j=0; j<3; j++)
    {
        tc+=twoD[i][j]+" ";
        newarr[i][j]=twoD[j][i];
        ans+=twoD[i][j];
        if(i==j)
        d+=twoD[i][j];
        if(i+j==twoD.length-1)
        {
            d2+=twoD[i][j];
        }
    }
    tc+="<br>";
    console.log(newarr);
document.getElementById("array_elements").innerHTML=tc+"sum:"+ans;
document.getElementById("dia").innerHTML="Diagonal Sum1: "+d;
document.getElementById("dia1").innerHTML="Diagonal Sum2: "+d2;
}
