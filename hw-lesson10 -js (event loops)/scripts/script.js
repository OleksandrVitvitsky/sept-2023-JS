//
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


let userWrap = document.createElement('div');
userWrap.classList.add("wrapper");

let userForm = document.createElement('form');
userForm.name = 'userForm';
let userFormHeading = document.createElement('h2');
userFormHeading.innerText = 'Create user:';
let usernameGroup = document.createElement('div');
usernameGroup.classList.add("form-group");

let userNameLabel = document.createElement('label');
userNameLabel.htmlFor='username';
userNameLabel.innerHTML = `<span><b>Name:</b></span>`;

let userNameInput = document.createElement('input');
userNameInput.id     = 'username';
userNameInput.name  = 'username';
userNameInput.type  = 'text';
userNameInput.placeholder = 'name';
userNameInput.value = '';
userNameInput.required=true;

let userSurnameGroup = document.createElement('div');
userSurnameGroup.classList.add("form-group");

let userSurNameLabel = document.createElement('label');
userSurNameLabel.htmlFor='surname';
userSurNameLabel.innerHTML = `<span><b>Surname:</b></span>`;

let userSurNameInput = document.createElement('input');
userSurNameInput.id     = 'surname';
userSurNameInput.name  = 'surname';
userSurNameInput.type  = 'text';
userSurNameInput.placeholder = 'surname';
userSurNameInput.value = '';
userSurNameInput.required = true;

let userAgeGroup = document.createElement('div');
userAgeGroup.classList.add("form-group");

let userAgeLabel = document.createElement('label');
userAgeLabel.htmlFor='age';
userAgeLabel.innerHTML = `<span><b>Age:</b></span>`;

let userAgeInput = document.createElement('input');
userAgeInput.id     = 'age';
userAgeInput.name  = 'age';
userAgeInput.type  = 'number';
userAgeInput.placeholder = 'age';
userAgeInput.value = '';
userAgeInput.min = 1;
userAgeInput.max = 100;
userAgeInput.required =true;

let userSubmitGroup = document.createElement('div');
userSubmitGroup.classList.add("form-group","submit-btn");

let userSubmitInput = document.createElement('input');
userSubmitInput.type  = 'submit';
userSubmitInput.value = 'Submit';


usernameGroup.appendChild(userNameLabel);
usernameGroup.appendChild(userNameInput);

userSurnameGroup.appendChild(userSurNameLabel);
userSurnameGroup.appendChild(userSurNameInput);

userAgeGroup.appendChild(userAgeLabel);
userAgeGroup.appendChild(userAgeInput);

userSubmitGroup.appendChild(userSubmitInput);

userForm.appendChild(userFormHeading);
userForm.appendChild(usernameGroup);
userForm.appendChild(userSurnameGroup);
userForm.appendChild(userAgeGroup);
userForm.appendChild(userSubmitGroup);

userWrap.appendChild(userForm);
document.body.appendChild(userWrap);



// let btn_Prev =  document.createElement('button');
// btn_Prev.classList.add('btn');
// btn_Prev.innerText = 'prev';
// btn_Prev.disabled=true;


function createButton__NEXT(){
    let buttonsGroup = document.createElement('div');
    buttonsGroup.classList.add("btns-box");
    let btn_Next =  document.createElement('button');
    btn_Next.classList.add('btn');
    btn_Next.innerText = 'next ->';
    buttonsGroup.appendChild(btn_Next);
    document.body.appendChild(buttonsGroup);   
}

createButton__NEXT();



function printUser (user) {

   let findWrapper = document.getElementsByClassName('userPrintWrapper')[0]
    if (findWrapper) {
        findWrapper.remove();
    }

   let userPrintWrap = document.createElement('div');
    userPrintWrap.classList.add("userPrintWrapper");

    userPrintHead = document.createElement('h3');
    userPrintHead.classList.add("userPrintHeading");
    userPrintHead.innerText = 'User created';

    userPrintPar = document.createElement('span');
    userPrintPar.classList.add("userPrintParag");
    userPrintPar.innerHTML = `<h4> Name </h4>  ${user.name} <br> 
                                        <h4> Surname </h4> ${user.surname} <br>
                                                                 <h4> Age </h4> ${user.age}`;


    userPrintWrap.appendChild(userPrintHead);
    userPrintWrap.appendChild(userPrintPar);
    document.body.appendChild(userPrintWrap);
    let buttonsGroup = document.getElementsByClassName('btns-box')[0] ;
    buttonsGroup.remove();
    createButton__NEXT();
}

class CreateUser {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getUser (name, surname, age) {
       printUser(this);
    };
}

let formUserForm = document.forms['userForm'];
formUserForm.onsubmit = function (e) {
    e.preventDefault();
    let newUser  = new CreateUser(this.username.value,this.surname.value, this.age.value);
    newUser.getUser();
}

document.getElementsByClassName('button')[0].onclick = function(event) {
    window.location.href = 'task2.html';
};
//// НАСТУПНЕ ЗАВДАННЯ В ФАЙЛІ TASK2.HTML

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається