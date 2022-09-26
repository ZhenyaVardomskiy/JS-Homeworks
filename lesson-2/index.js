// 1

// let name = prompt("ваше имя?");
// let age = prompt("Сколько вам лет?");
// let city = prompt("город проживания?");
// let phone = prompt("ваше номер телефона?");
// let email = prompt("ваш email?");
// let company = prompt("В какой комнании вы работаете?");

// document.write('Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в комании ' + company + '. Мои контактные данные: ' + phone  +  email);

// 2

// let year = 2022 - age;

// document.write( '<br />', name + ' родился в ' + year + ' году.');

// 3

let str = 123456;
if (str[0] + str[1] + str[2] === str[3] + str[4] + str[5]) {
    console.log('yes')
} else console.log('no');

// 4

let a = 1;
if (a > 0) {
    console.log('верно')
} else console.log('неверно');

a = 0;
if (a > 0) {
    console.log('верно')
} else console.log('неверно');

a = -3;
if (a > 0) {
    console.log('верно')
} else console.log('неверно');

// 5

let b = 2
a = 10;

summa = a + b;
raznost = a - b;
proizved = a * b;
delenie = a / b;

if (summa > 1) {summa = summa ** 2}
console.log(summa, raznost, proizved, delenie)

// 6

if (a>2 && a>11 || b>=6 && b<14){
    console.log ('верно')
}else console.log('неверно');

// 7

let n = 27;
    if (n >= 0 && n <= 14) {
        console.log ("Первая");
     }
    if (n >= 15 && n <= 30) {
        console.log ("Вторая");
     }
    if (n >= 31 && n <= 45) {
        console.log ("Третья");
     }
    if (n >= 46 && n <= 59) {
        console.log ("Четвертая");
     }

// 8

let day = 24;
    if (day >= 1 && day <= 10 ) {
        console.log ("первая");
    }
    if (day >= 11 && day <= 20 ) {
        console.log ("вторая");
    }
    if (day >= 21 && day <= 31 ) {
        console.log ("третья");
    }

// 9

days = 6 

    if (365 > days){
        console.log("меньше года")
    }else {let years = days / 365;
    console.log(years);}

    if (31 > days){
        console.log("меньше месяца")
    }else {let mounth = days / 31;
    console.log(mounth);}

    if (7 > days){
        console.log("меньше недели")
    }else {let week = days / 7;
    console.log(week);}

let hours = 24 * days;
    console.log(hours);
let min = 1440 * days;
    console.log(min);
let sec = 86400 * days;
    console.log(sec);       

// 10


