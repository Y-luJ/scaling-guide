let a=[4, 34, 26, 1, 21, -1, 7]
console.log(a);
let b=[];
for (let i=(a.length-1); i>(-1); i--) {
    b.push(a[i]);
}
a=b;
console.log(a);
let L=a.length;
let l=Math.floor(L/2);
let temp=0;
for (i=0; i<Math.floor((a.length)/2); i++) {
    temp=a[i];
    a[i]=a[L-l+i];
    a[L-l+i]=temp;
}
console.log(a);
let aver = (a.reduce((sum, current) => sum + current, 0)/(a.length));
b=[];
for (let i=0; i<a.length; i++) {
    if (a[i]<aver) {
        b.push(+a[i]);
    }
}
console.log(b);
let min=a[0], max=a[0];
for (let i=1; i<a.length; i++) {
    if (a[i]<min) {
        min=a[i];
    }
    else if (a[i]>max) {
        max=a[i];
    }
}
console.log((a.reduce((sum, current) => sum + current, 0)-min-max));