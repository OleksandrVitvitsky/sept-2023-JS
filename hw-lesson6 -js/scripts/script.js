


let spacer = `<br><hr><br>`;
//*******************TASKS for lesson 5 (array func)****************************
// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arrOfStrings = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (let i = 0; i < arrOfStrings.length; i++) {
    const item = arrOfStrings[i];
    document.write(`<div> Довжина словосполучення ${item} = ${item.length} символів </div>`);
}
document.write(spacer);



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arrOfStringsUpperCase = [];
for (let i = 0; i < arrOfStrings.length; i++) {
    const item = arrOfStrings[i].toUpperCase();
    arrOfStringsUpperCase.push(item);
    document.write(`<div "> Переведення словосполучення ${arrOfStrings[i]} у верхній регістр  --  ${item}</div>`);
}
document.write(spacer);



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
for (let i = 0; i < arrOfStringsUpperCase.length; i++) {
    const item = arrOfStringsUpperCase[i].toLowerCase();   
    document.write(`<div "> Переведення словосполучення ${arrOfStringsUpperCase[i]} у нижній регістр  --  ${item}</div>`);
}
document.write(spacer);



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
document.write(`<div "> Рядок - /${str}/ після очищення від пробілів = /${str.trim(' ')}/</div>`);
document.write(spacer);



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToArray(strToArray) {
      return strToArray.split(' ');
}
let str1 = 'Ревуть воли як ясла повні';
let arr1 = stringToArray(str1);

document.write(`<div> ${arr1.toString()}</div>`);
console.log(arr1);
document.write(spacer);



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrOfNumbers1 = [10,8,-7,55,987,-1011,0,1050,0];
let newArrOfNumbers1 = arrOfNumbers1.map((item) => {
    return item +'';
} );
document.write(`<div> ${newArrOfNumbers1.toString()}</div>`);
console.log(newArrOfNumbers1);
document.write(spacer);
document.write(`<div> Всі інші завдання див. в консолі </div>`);
document.write(spacer);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
function sortNums(arrNumb, direction) {
    if (direction === 'ascending') {
        arrNumb.sort( (a, b) => {
            return a - b;
        })
    } else if (direction === 'descending'){
        arrNumb.sort( (a,b) => {
            return b - a;
        })
    }
    return arrNumb;
}

let nums = [11,21,3];
console.log(nums);
console.log(sortNums(nums,'ascending')); // [3,11,21]
console.log(sortNums(nums,'descending'));// [21,11,3]




// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

function sortCourses(arrayOfCourses, field) {
    arrayOfCourses.sort( (item1 , item2 ) => {
            return item2[field] - item1[field];
        })

    return arrayOfCourses;
}
let newSortedArrayOfCourses = sortCourses(coursesAndDurationArray,'monthDuration');
console.log(newSortedArrayOfCourses);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredArrayOfCourses = coursesAndDurationArray.filter((item) => {
    if (item.monthDuration > 5) {
        return item;
    }
})
console.log(filteredArrayOfCourses);



// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let newCoursesAndDurationArray = coursesAndDurationArray.map((item,index) => {
    return {
        id: ++index,
        title: item.title,
        monthDuration: item.monthDuration
    }
})
console.log(newCoursesAndDurationArray);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//


let arrSuits = ['spades', 'diamonds', 'hearts', 'clubs'];
let arrCards = [6 ,7 , 8 , 9 , 10 ,'J','Q','K','A'];
const Koloda =[];
for (const suit of arrSuits) {
    let color;
    if (suit === 'diamonds' || suit === 'hearts' ){
        color = 'red';
    }
    if (suit === 'spades' || suit === 'clubs' ){
        color = 'black';
    }
    for (const cardRang of arrCards) {
        Koloda.push({
            suit: suit,
            rang: cardRang,
            color: color
        });
    }
}
console.log(Koloda);


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker