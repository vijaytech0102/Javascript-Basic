
// tagname to id
let x=document.getElementById("main");
console.log(x);
let y=x.getElementsByTagName("p");
console.log(y);
document.getElementById("heading").innerHTML=y[0].innerHTML+y[1].innerHTML+y[2].innerHTML;

// tag name to tag name
let g=document.getElementsByTagName("h3");
console.log(g);
let k=document.getElementsByTagName("h4");
console.log();
        k[0].innerHTML=g[0].innerHTML;
        k[1].innerHTML=g[1].innerHTML;

console.log(k);


// getelementbyclassname
let p=document.getElementsByClassName("para");
document.getElementById("content").innerHTML=p[0].innerHTML;
console.log(p);


let j=document.getElementsByClassName("para1");
j[0].innerHTML=p[0].innerHTML+" classname to classname";
