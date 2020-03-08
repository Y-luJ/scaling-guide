let x1=5;
let x2=10;
let y1=4;
let y2=20;
a=(y2+y1)/(x2+x1);
b=a*x1-y1;
console.log('y='+a+'*x'+'+'+b);
var answer='Уравнение прямой для точек ('+x1+';'+y1+'), ('+x2+';'+y2+'): y='+a+'*x'+'+'+b;
document.getElementById("answer").innerHTML = answer;