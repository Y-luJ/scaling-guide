let n=prompt('Введите количество элементов ряда');
let arr=[0, 1];
for (let i=2; i<(+n +2); i++) {
    arr.push(arr[i-1]+arr[i-2]);
}
arr.splice(0, 2);
console.log(arr);
alert(arr);