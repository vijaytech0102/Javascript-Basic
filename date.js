const d= new Date("April 18, 2023 19:45:00")// year , month, day, time...
console.log(d);
let year= d.getFullYear();
console.log(year);
let month= d.getMonth()
console.log(month);
let t= d.getTime()
console.log(t);
days=["sun","Mon", "tue", "wed", "thurs","fri", "sat"]
let day= days[d.getDay()];
console.log(day);
const g= new Date(2018, 11, 22, 10, 56, 0)// year , month, day, time...
// month count 0 to 11
console.log(g);
const m= new Date(10000000000)// year , month, day, time...
// month count 0 to 11
console.log(m);