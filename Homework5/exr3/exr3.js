function f(x) {
    if (x==1) {
        return 1;
    }
    else {
        return f(x-1)+x;
    }
}
let x=Math.floor(Math.random()*10001);
if (f(x)==((x**2+x)/2)) {
    console.log(f(x)+' результаты совпадают');
}
else {
    console.log(f(x)+' результаты не совпадают');  
}