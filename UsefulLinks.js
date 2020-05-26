

// let yes=() => {
//     console.log('Wow!');
// };

// let ask=(question, yes)=> {

//     function no() {
//         console.log('Why?');
//     };
//     (confirm(question))? yes(): no(); 
//   };

// ask('Вы согласны?', yes);
// no();

// no=function(){
//     console.log('Game over!');
// }
// no();
// let calculator={
//     read() { 
//             this.a=+prompt('Input first var', '');
//             this.b=+prompt('Input second var', '');
//     },
//     sum() {
//         return (this.a+this.b);
//     },
//     mul() {
//         return (this.a*this.b);
//     }
// }
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//       return this;
//     }
//   };
  
//   console.log(ladder.up());
// let user = {
//     name: "Джон",
//     hi() { alert(this.name); }
//     };
// let name='Jensen';    
// let hi = function() { alert(this.name); return (this) };

// console.log(hi());
// let start = Date.now(); // количество миллисекунд с 1 января 1970 года

// выполняем некоторые действия
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = Date.now(); // заканчиваем отсчёт времени

// alert( `Цикл отработал за ${end - start} миллисекунд` ); // вычитаются числа, а не даты
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
users.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(users);
let delElem=document.getElementById('del');
function vanish(onclick) {
  delElem.style.display='none';
  setTimeout(function() {delElem.style.display=''; delElem.innerHTML='=> Palo-Alto 3000'}, 2000);
}