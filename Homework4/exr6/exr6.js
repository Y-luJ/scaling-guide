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
        if (y<0) {
            console.log('Точка ('+x+','+y+') принадлежит четвертой четверти');
            var answer= 'Точка ('+x+','+y+') принадлежит четвертой четверти';
            document.getElementById("answer").innerHTML = answer;
        }
        else {
            console.log('Точка ('+x+','+y+') лежит на оси абсцисс в правой полуплоскости');
            var answer= 'Точка ('+x+','+y+') лежит на оси абсцисс в правой полуплоскости';
            document.getElementById("answer").innerHTML = answer;
        }
        
    }  
}
else if (x<0) {
    if (y>0) {
        console.log('Точка ('+x+','+y+') принадлежит второй четверти');
        var answer= 'Точка ('+x+','+y+') принадлежит второй четверти';
        document.getElementById("answer").innerHTML = answer;
    }
    else {
        if (y<0) {
            console.log('Точка ('+x+','+y+') принадлежит третьей четверти');
            var answer= 'Точка ('+x+','+y+') принадлежит третьей четверти';
            document.getElementById("answer").innerHTML = answer;
        }
        else {
            console.log('Точка ('+x+','+y+') лежит на оси абсцисс в левой полуплоскости');
            var answer= 'Точка ('+x+','+y+') лежит на оси абсцисс в левой полуплоскости';
            document.getElementById("answer").innerHTML = answer;
        }
    }
}
else {
    if (y>0) {
        console.log('Точка ('+x+','+y+') лежит на оси ординат в верхней полуплоскости');
        var answer= 'Точка ('+x+','+y+') лежит на оси абсцисс в верхней полуплоскости';
        document.getElementById("answer").innerHTML = answer;
        }
    else if (y<0) {
        console.log('Точка ('+x+','+y+') лежит на оси ординат в нижней полуплоскости');
        var answer= 'Точка ('+x+','+y+') лежит на оси абсцисс в нижней полуплоскости';
        document.getElementById("answer").innerHTML = answer;
        }
    else {
        console.log('Поздравляю! Вы в центре координат!');
        var answer= 'Поздравляю! Вы в центре координат!';
        document.getElementById("answer").innerHTML = answer;
    }
}