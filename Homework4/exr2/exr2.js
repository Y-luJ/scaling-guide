let a=2;
let b=-4;
let c=-2;
var D=b*b-4*a*c;
var x1=(-b+(Math.sqrt(D))/(2*a)).toFixed(3);
var x2=(-b-(Math.sqrt(D))/(2*a)).toFixed(3);
console.log(x1);
console.log(x2);
var answer = 'x1='+x1+', x2='+x2;
document.getElementById("answer").innerHTML = answer;