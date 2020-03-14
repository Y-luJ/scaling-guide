let max=100;
let min=0;
let x=Math.floor(Math.random()*(max+1));
console.log(x);
let n=0;
while (n<11)  {
    guess=Math.floor((min+max)/2);
    if (guess===x) {
        console.log('Ответ найден c '+n+' попытки. x='+guess);
        break;
    }
    else if (guess>x) {
        max=Math.floor(guess);
    }
    else if (guess<x) {
        min=Math.floor(guess);
    }
    n++;
}
if (n>10) {
    console.log('Ответ не найден. x=', x);
}
