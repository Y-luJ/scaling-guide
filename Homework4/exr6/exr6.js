function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min+1)) + min;
  }
let x=getRandomInt(-10, 10);
let y=getRandomInt(-10, 10);
if (x>0) {
    if (y>0) {
        console.log('Точка ('+x+','+y+') принадлежит первой четверти');
        var answer= 'Точка ('+x+','+y+') принадлежит первой четверти';
        document.getElementById("answer").innerHTML = answer;
    }
    else {
        console.log('Точка ('+x+','+y+') принадлежит четвертой четверти');
        var answer= 'Точка ('+x+','+y+') принадлежит четвертой четверти';
        document.getElementById("answer").innerHTML = answer;
    }  
}
else {
    if (y>0) {
        console.log('Точка ('+x+','+y+') принадлежит второй четверти');
        var answer= 'Точка ('+x+','+y+') принадлежит второй четверти';
        document.getElementById("answer").innerHTML = answer;
    }
    else {
        console.log('Точка ('+x+','+y+') принадлежит третьей четверти');
        var answer= 'Точка ('+x+','+y+') принадлежит третьей четверти';
        document.getElementById("answer").innerHTML = answer;
    }
}