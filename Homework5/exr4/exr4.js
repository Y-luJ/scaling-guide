let x=Math.floor(Math.random()*10001);
let b=(String(x).length);
console.log(x);
let y=0;
while (x>0) {
    y=y+(x%10)*(10**(b-1));
    b--;
    x=Math.floor(x/10);
}
console.log(y);