let x=Math.floor(Math.random()*900001)+100000;
x=String(x)
console.log(x);
let s=0;
let p=1;
for (ind=0; ind<x.length; ind++) {
    s=s+ +x[ind];
    p=p* +x[ind];
}
console.log(s);
console.log(p);
