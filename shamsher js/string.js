let str="Hello world welcome to javascript";

size=str.length;
console.log(size);
for(let i=0; i<str.length; i++)
{
    console.log(str[i]);
}
// split()--> it converts the string into array
let arr=str.split(" ");
for(let i=0; i<arr.length; i++)
{
    console.log(arr[i]);
}
console.log(arr);

let ans=arr.join(" ");
console.log(ans);
str[5]=90;
console.log(str);

// slice(start, end(not included))
let sl=str.slice(5,11);
console.log(sl);

// substring(start, end(included))
let substrings=str.substring(-400,5);
console.log(substrings);


// substr(start, length)

let sbt=str.substr(6,5);
console.log(sbt);

let s="HTML, CSS ,JS,JS";
let s1=s.replace("JS", "Javascript");
console.log(s1);
let s2=s.replaceAll("JS", "Javascript");
console.log(s2);