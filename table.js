function table(n){
    let txt='';
    for(let i=1; i<=10; i++)
    {
        txt+=n+"*"+i+"="+n*i+"<br>";
    }
    document.getElementById("ta").innerHTML=txt;
}
let n=prompt("Enter the number");
table(n);