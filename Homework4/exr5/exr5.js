function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min+1)) + min;
  }
let a=getRandomInt(-100, 100);
let b=getRandomInt(-100, 100);
if (a%b==0) {
    console.log('Число '+a+'делится на число '+b);
    var answer= 'Число '+a+'делится на число '+b+'. Частное равно '+(a/b);
    document.getElementById("answer").innerHTML = answer;
}
else {
    console.log('Число '+a+' не делится на число '+b+'. Остаток равен '+(a%b));
    var answer= 'Число '+a+' не делится на число '+b+'. Остаток равен '+(a%b)+'. Частное равно '+(a/b);
    document.getElementById("answer").innerHTML = answer;
}
console.log('Частное равно '+(a/b));