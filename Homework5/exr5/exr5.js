let x1=prompt('Первая переменная');
let x2=prompt('Вторая переменная');
let sign=prompt('Операция',);
console.log(x1, x2, sign);
let operations='0+-*/';
while (sign!='0') {
    if (operations.indexOf(sign)==-1) {
        alert('Укажите корректную операцию');
        x1=prompt('Первая переменная');
        x2=prompt('Вторая переменная');
        sign=prompt('Операция',);
    }
    else {
        if (sign=='+') {
            alert(+x1 + +x2);
            x1=prompt('Первая переменная');
            x2=prompt('Вторая переменная');
            sign=prompt('Операция');
        }
        else if (sign=='-') {
            alert(x1-x2);
            x1=prompt('Первая переменная');
            x2=prompt('Вторая переменная');
            sign=prompt('Операция');
        }
        else if (sign=='*') {
            alert(x1*x2);
            x1=prompt('Первая переменная');
            x2=prompt('Вторая переменная');
            sign=prompt('Операция');
        }
        else if (sign=='/') {
            if (x2!='0') {
                alert(x1/x2);
                x1=prompt('Первая переменная');
                x2=prompt('Вторая переменная');
                sign=prompt('Операция'); 
            }
            else {
                alert("Деление на 0! Укажите корректные данные")
                x1=prompt('Первая переменная');
                x2=prompt('Вторая переменная');
                sign=prompt('Операция');
            }
        }
    }
} 