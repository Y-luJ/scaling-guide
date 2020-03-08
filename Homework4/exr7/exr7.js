function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min+1)) + min;
  }
let x=getRandomInt(-15, 15);
let y=getRandomInt(-15, 15);
let r=getRandomInt(0, 10);
if (x**2 +y**2>r**2) {
    console.log('Точка ('+x+','+y+') не принадлежит кругу с радиусом '+r);
    var answer = 'Точка ('+x+','+y+') не принадлежит кругу с радиусом '+r;
    document.getElementById("answer").innerHTML = answer;
}
else {
    console.log('Точка ('+x+','+y+') принадлежит кругу с радиусом '+r);
    var answer= 'Точка ('+x+','+y+') принадлежит кругу с радиусом '+r;
    document.getElementById("answer").innerHTML = answer;
};