let spacer = `<br><hr><br>`;



// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangularArea = (height, weight) =>  height * weight;
let a = 15;
let b = 48;
document.write(`<div> Площа прямокутника  = ${rectangularArea(a, b)} </div>`);
document.write(spacer);



// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = (radius) => Math.PI * (radius * radius);
let c = 15;
document.write(`<div> Площа круга  = ${circleArea(c)} </div>`);
document.write(spacer);



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (radius, height) => 2 * Math.PI * radius * height;
let radiusCylinder = 15;
let heightCylinder = 30;
document.write(`<div> Площа циліндра  = ${cylinderArea(radiusCylinder, heightCylinder)} </div>`);
document.write(spacer);



// - створити функцію яка приймає масив та виводить кожен його елемент
let foobar1 = (array) => {
    if (Array.isArray(array)) {
        for (const arrayElement of array) {
            document.write(`<div> ${arrayElement} </div>`);
        }
    }
}
let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
foobar1(coursesTitleArray)
document.write(spacer);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let writeParagraf = (someString)  => document.write(`<div> <p>${someString}</p> </div>`);

writeParagraf('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores at culpa cumque debitis,' +
    ' distinctio est expedita id molestiae nobis, omnis pariatur perspiciatis quidem repellat velit vero vitae. Cupiditate, eum?');
document.write(spacer);




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl = (someString) => {
    document.write(`<div><ul>`);
    document.write(`<li> ${someString} </li>`);
    document.write(`<li> ${someString} </li>`);
    document.write(`<li> ${someString} </li>`);
    document.write(`</ul></div>`);
}
createUl("Привіт, світ!!!");
document.write(spacer);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUl_2 = (someString, ul_lenght) =>{
    document.write(`<div><ul>`);
    for (let i = 0; i < ul_lenght; i++) {
        document.write(`<li> ${someString} </li>`);        
    }
    document.write(`</ul></div>`);
}
createUl_2("Привіт, світ!!!",6);
document.write(spacer);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let writeList = (array) =>  {
    document.write(`<div><ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul></div>`);
}
writeList(['lorem',5,true,'',null,false]);
document.write(spacer);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let foobar2 = (arrayObjects) =>  {

    for (let i = 0; i < arrayObjects.length; i++) {
        document.write(`<div>`);
        for (const objElement in arrayObjects[i]) {
            document.write(` ${objElement}: ${arrayObjects[i][objElement]} `);
        }
        document.write(`</div>`);
    }
}
let arr = [
    {id: 11,name: 'Honda',age: 75},
    {id: 22,name: 'Subaru',age: 2},
    {id: 33,name: 'Volvo',age: 15},
    {id: 44,name: 'Suzuki',age: 6}
    ];
foobar2(arr);
document.write(spacer);



// - створити функцію яка повертає найменьше число з масиву
let writeMinNumberOfArray = (array) => {
    let minItem = array[0];
    for (const item of array) {
        if (item < minItem) {
            minItem = item;
        }
    }
    return minItem;
}
let arrOfNumber = [55, 87, 12, 0, -5, 745];
document.write(`<div> Найменше число з масиву ${writeMinNumberOfArray(arrOfNumber)}</div>`);
document.write(spacer);



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let Sum = (array) => {
    let total = 0;
    for (const item of array) {
        total = total + item;
    }
    return total;
}
document.write(`<div> Сума чисел в масиві =  ${Sum([15, 1204, 789, 102, -1054, 26])}</div>`);
document.write(spacer);



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let arrayLenght = arr.length - 1;
    if ((arrayLenght > index1) && (arrayLenght > index2)) {
        let value_Ind1 = arr[index1];
        let value_Ind2 = arr[index2];
        arr[index1] = value_Ind2;
        arr[index2] = value_Ind1;
    }
    return arr;
}
let array_1 = [15, 1204, 789, 102, -1054, 26];
document.write(`<div> Початковий масив -  ${(array_1)}</div>`);
document.write(`<div> Змінений масив ${swap(array_1,2,3)}</div>`);
document.write(spacer);



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let curExchange = (sum, currencyValues, exchangeCurrency)=>  {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return item.value * sum;
        }
    }
}

let currencyValues  = [
    {currency: 'USD', value: 37.83},
    {currency: 'EUR', value: 41.14}
];

let sum = 555;
let exchangeCurrency = 'USD';
let result = curExchange(sum, currencyValues, exchangeCurrency);
document.write(`<div> ${sum} uah =  ${(result)} ${exchangeCurrency}</div>`);
document.write(spacer);