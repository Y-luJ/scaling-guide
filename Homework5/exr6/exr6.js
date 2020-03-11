let even=0;
let odd=0;
let a=0;
for (i=0; i<10001; i++) {
    a=Math.floor(Math.random()*1000000000);
    if (a%2==0) {
        even++;
    }
    else {
        odd++;
    }
}
if (Math.abs((even-odd)/i)<0.01) {
    alert('Работа генератора корректна');
    console.log(even, odd, ((even-odd)/i));
}
else {
    alert('Работа генератора некорректна');
    console.log(even, odd, ((even-odd)/i)); 
}