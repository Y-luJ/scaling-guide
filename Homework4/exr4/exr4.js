function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min+1)) + min;
  }
let a=getRandomInt(-10, 10);
let b=getRandomInt(-10, 10);
let c=getRandomInt(-10, 10);
console.log(a, b, c);
console.log(Math.max(a*b*c, a+b+c) + 3);
var answer= Math.max(a*b*c, a+b+c) + 3;
document.getElementById("answer").innerHTML = answer;