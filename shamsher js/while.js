let number=prompt("Enter the number");
let number1=number;
let original=number;
let sum=0;
while(number>0)
{
    let r=number%10;
    sum+=r;
    number=Math.round(number/10);
}
document.getElementById("demo").innerHTML="The digit sum of number:"+sum;// concatenation
console.log(sum);
// reverse of number 
let rev=0;
while(number1!=0){
    let r=number1%10;
    rev=rev*10+r;
    number1=Math.round(number1/10);
}
document.getElementById("reverse").innerHTML="The reverse of a number:"+rev;
// palidrome number-->> when a number is reversed and the result is same as original number then it is palindrome.
if(original==rev)
{
    document.getElementById("palindrome").innerHTML="Yes it is pallindrome number:"+original+"=="+rev;
}

else{
    document.getElementById("palindrome").innerHTML="Not a palindrome";
}