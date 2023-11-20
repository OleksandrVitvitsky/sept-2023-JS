
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let name1   = 'hello';
console.log(name1);

let name2   = 'owu';
console.log(name2);

let name3   = 'com';
console.log(name3);

let name4   = 'ua';
console.log(name4);

let numb1 = 1;
console.log(numb1);

let numb2 = 10;
console.log(numb2);

let numb3 = -999;
console.log(numb3);

let numb4 = 123;
console.log(numb4);

const Pi = 3.14;
console.log(Pi);

let numb5 = 2.7;
console.log(numb5);

let numb6 = 16;
console.log(numb6);

let boolTrue = true;
console.log(boolTrue);

let boolFalse = false;
console.log(boolFalse);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName   = 'Oleksandr';
let middleName  = 'Vasyliovych';
let lastName    = 'Vitvitsky';
const Person =`${firstName} ${middleName} ${lastName}`; 
console.log(Person)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log('type of "a" is ' + typeof a);
let b = '100';
console.log('type of "b" is ' + typeof b);
let c = true;
console.log('type of "c" is ' + typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
firstName   = prompt('enter your first name?','');
middleName  = prompt('enter your middle name?','');
lastName    = prompt('enter your last name?','');
console.log(`Hey! How is it going, ${firstName} ${middleName} ${lastName}? :)`);
