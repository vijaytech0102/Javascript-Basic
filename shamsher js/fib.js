function fib(n)
{
    let a=0;
    let b=1;
    let txt="";
    txt+=a+"<br>"+b+"<br>";   
    for(let i=2; i<=n; i++)
    {

        let c=a+b;
        a=b;
        b=c;
        txt+=c+"<br>";
    }
    document.getElementById("de").innerHTML=txt;
}

let num=prompt("Enter the number");
fib(num);