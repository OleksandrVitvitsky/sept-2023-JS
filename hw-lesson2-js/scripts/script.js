// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arrayOfData = [51, 44, 'a', true, [], 'a23', {}, [22, 44, "21"], 88, 99];
console.log(arrayOfData[0]);
console.log(arrayOfData[1]);
console.log(arrayOfData[2]);
console.log(arrayOfData[3]);
console.log(arrayOfData[4]);
console.log(arrayOfData[5]);
console.log(arrayOfData[6]);
console.log(arrayOfData[7]);
console.log(arrayOfData[8]);
console.log(arrayOfData[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Witchers',
    pageCount: 185,
    genre: 'fantasy'
};
let book2 = {
    title: 'Eragon',
    pageCount: 384,
    genre: 'scientific '
};
let book3 = {
    title: 'Жорстокий принц',
    pageCount: 874,
    genre: 'adventures'
};
console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'Witchers', pageCount: 185, genre: 'fantasy',
    autors: [{
        name: 'Roald Dahl',
        age: 68
    }]};
let book5 = {
    title: 'Eragon',
    pageCount: 384,
    genre: 'scientific',
    autors: [{
        name: 'Christopher Paolini',
        age: 58
    }]};
let book6 = {
    title: 'Жорстокий принц',
    pageCount: 874,
    genre: 'adventures',
    autors: [{
        name: 'Holly Black',
        age: 48
    }]};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arrOfHeroes = [
    {name:'Spider man', username:'spider',password:'5255asd554'},
    {name:'Capitan America', username:'cap',password:'asdxc547845asAA'},
    {name:'Iron man', username:'metalicMan', password: 31315},
    {name:'Halk', username:'greenBoy',password:'asds3gbmv'},
    {name:'Wolverine', username:'wolverine_nnav',password:'646535assAA'},
    {name:'Thor', username:'asgardec',password:'5423163165'},
    {name:'Dr. Strange', username:'doc',password:'bumbum'},
    {name:'Black Panther', username:'murmur',password:'aasdcvcxcv22'},
    {name:'Venom', username:'VenomusGnomus',password:'1'},
    {name:'Grut', username:'tree',password:'0000'}
]
console.log(arrOfHeroes[0]['password']);
console.log(arrOfHeroes[1]['password']);
console.log(arrOfHeroes[2]['password']);
console.log(arrOfHeroes[3]['password']);
console.log(arrOfHeroes[4]['password']);
console.log(arrOfHeroes[5]['password']);
console.log(arrOfHeroes[6]['password']);
console.log(arrOfHeroes[7]['password']);
console.log(arrOfHeroes[8]['password']);
console.log(arrOfHeroes[9]['password']);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = +prompt('Введіть число', 0);
if (x !== 0) {
    console.log(true);
} else {
    console.log(false);
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

/// за допомогою if /else
let time = +prompt('Введіть число від 0 до 59', 1);
if (time > 60) {
    console.log('Ваше число більше 60. До побачення!!!');
} else if (time >= 45) {
    console.log('Ваше число відноситься до 4 чверті');
} else if (time >= 30) {
    console.log('Ваше число відноситься до 3 чверті');
} else if (time >= 15) {
    console.log('Ваше число відноситься до 2 чверті');
} else if (time >= 0) {
    console.log('Ваше число відноситься до 1 чверті');
} else {
    console.log('Good luck!!!')
}
/// за допомогою switch

switch (true){
    case time > 60:
        console.log('Ваше число більше 60. До побачення!!!');
        break;
    case time >= 45:
        console.log('Ваше число відноситься до 4 чверті');
        break;
    case time >= 30:
        console.log('Ваше число відноситься до 3 чверті');
        break;
    case time >= 15:
        console.log('Ваше число відноситься до 2 чверті');
        break;
    case time > 0:
        console.log('Ваше число відноситься до 1 чверті');
        break;
    default:
        console.log('Ваше число не підходить!!!');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Введіть число від 1 до 31', 1);
if (  day > 31 || day <= 0) {
    console.log('Ваше число не пыдходить для визначення декади');
} else if (day >= 20) {
    console.log('Ваше число відноситься до 3 декади');
} else if (day >= 10) {
    console.log('Ваше число відноситься до 2 декади');
} else if (day >= 1) {
    console.log('Ваше число відноситься до 1 декади');
} else if (day >= 0) {
    console.log('Ваше число відноситься до 1 чверті');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeek = +prompt('Введіть номер дня тижня (від 1 до 7)', 1);
switch (dayOfWeek){
    case  1:
        console.log('Ваш день  - Monday');
        break;
    case  2:
        console.log('Ваш день  - Tuesday');
        break;
    case  3:
         console.log('Ваш день  - Wednesday');
        break;
    case  4:
       console.log('Ваш день  - Thursday');
        break;
    case  5:
      console.log('Ваш день  - Friday');
        break;
    case  6:
        console.log('Ваш день  - Saturday');
        break;
    case  7:
     console.log('Ваш день  - Sunday');
        break;
    default:
        console.log('Ваше число не відноситься до днів тижня!!!');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = +prompt('Введіть будь-яке перше число:', 1);
let b = +prompt('Введіть будь-яке друге число:', 1);


if (a === b) {
    console.log("Числа рівнозначні!!!" )
}else if (a > b) {
    console.log("Більше число:  " + a);
}else if (a < b) {
    console.log("Більше число:  " + b);
}


//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

 x = undefined; // без let , тому що змінна вже ініціалізована в поередньому завданні
if ((!!x === !!0) || (!!x === !!'') || (!!x === !!NaN) || (!!x === !!undefined) || (!!x === !!null)) {
    x = 'default';
    console.log(x);
}
x = 11;
console.log(x|| 'default');

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]['monthDuration'] >= 5) {
    console.log(coursesAndDurationArray[0].title + '  -  Super!!!');
}
if (coursesAndDurationArray[1]['monthDuration'] >= 5) {
    console.log(coursesAndDurationArray[1].title + '  -  Super!!!');
}
if (coursesAndDurationArray[2]['monthDuration'] >= 5) {
    console.log(coursesAndDurationArray[2].title + '  -  Super!!!');
}
if (coursesAndDurationArray[3]['monthDuration'] >= 5) {
    console.log(coursesAndDurationArray[3].title + '  -  Super!!!');
}
if (coursesAndDurationArray[4]['monthDuration'] >= 5) {
    console.log(coursesAndDurationArray[4].title + '  -  Super!!!');
}
if (coursesAndDurationArray[5]['monthDuration'] >= 5) {
    console.log(coursesAndDurationArray[5].title + '  -  Super!!!');
}