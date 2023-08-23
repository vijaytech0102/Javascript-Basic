
function palindrome(x){
let rev= 0; let original = x;
while(x!=0)
{
    let r= x%10;
    rev=rev*10+r;
    x=Math.floor(x/10);
}
if(rev==original)
{
    console.log("Yes it is pallindrome");
       document.getElementById("pal").innerHTML ="palindrome" + rev;
}
else{
    console.log("NOt a pallindrome");

     document.getElementById("pal").innerHTML ="Not a palindrome" + rev;
}
}
let n=prompt("Enter the number");
palindrome(n);