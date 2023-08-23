let n= prompt("Enter the number:");
 let p=n;
 let rev=0;
 while(n!=0)
 {
    let r=n%10;
    rev=rev*10+r;
    n=Math.floor(n/10);
 }
 if(rev==p)
 {
    console.log(rev,p);
    console.log("palindrome");
    document.getElementById("demo").innerHTML="Yes it is a palimdrome";
}
else{
    console.log(rev,p);
    console.log("Not a palindrome");
    document.getElementById("demo").innerHTML="Not a palimdrome";
    
 }