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

// string searching

//1.indexof()--> postion
let string="Hello welcome to javascript to";
let index=string.indexOf("to");
console.log(index);
//2.lastindexof()
let last=string.lastIndexOf("to");
console.log(last);

//3. search()--> returns the position of the string

let str1="Hello Javascript and DP";
let pos=str1.search("and");
console.log(pos);
let mt=str1.match("and");
console.log(mt);
console.log(mt[0]);
console.log(mt.index);
console.log(mt.input);
console.log(mt.groups);
console.log(mt.length);
//4. includes()--> it return true if it is present in the string otherwise false

let an=str1.includes("and");
console.log(typeof(an));
//5.Matchall()--> iterator


//6.startwith()--> check whether string is starting from a particular character or not return true or false


let sr="This is a string method";
let verify=sr.startsWith("This");
console.log(verify);
// 7. endswith()--> 
let sr1="This is a string method";
let verify1=sr1.endsWith("method");
console.log(verify1);
