let spacer = document.createElement('hr');
spacer.style.border = '2px solid blue';
spacer.style.width='60%';

// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


let mainDiv = document.createElement('div');
    mainDiv.classList.add('main');
  
    
let childDiv = document.createElement('div');
    childDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
    childDiv.classList.add('boxWidth');
    childDiv.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur enim incidunt labore perspiciatis rem similique sint sunt temporibus voluptatum? Impedit modi optio perspiciatis placeat';
    childDiv.style.background = 'cornflowerblue';
    childDiv.style.color = 'grey';
    childDiv.style.fontSize = '20px';
    // childDiv.style.width = '60%';
    childDiv.style.height = '25%';
    childDiv.style.margin='2px';

let clonedChildDiv = childDiv.cloneNode(true);
    clonedChildDiv.style.background = 'green';
    clonedChildDiv.style.color = 'black';
    mainDiv.appendChild(childDiv);
    mainDiv.appendChild(clonedChildDiv);
    document.body.appendChild(mainDiv);
  


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let navItems =['Main','Products','About us','Contacts'];

let listWrap = document.createElement('div');
listWrap.classList.add('boxWidth');
let list = document.createElement('ul');

for (let navItem of navItems) {
    let item = document.createElement('li');
    item.innerText = `${navItem}`;
    list.appendChild(item);
}
listWrap.appendChild(list);
document.body.appendChild(listWrap);


// - Є масив
let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let courseWrap = document.createElement('div');

for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
    let elementWrap = document.createElement('div');
    elementWrap.innerHTML = `<h2>  Title: ${coursesAndDurationArrayElement.title} </h2>
        <h3> monthDuration: ${coursesAndDurationArrayElement.monthDuration} </h3>`;   
    courseWrap.appendChild(elementWrap);    
}
document.body.appendChild(courseWrap);

// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//         {title: 'JavaScript Complex', monthDuration: 5},
//         {title: 'Java Complex', monthDuration: 6},
//         {title: 'Python Complex', monthDuration: 6},
//         {title: 'QA Complex', monthDuration: 4},
//         {title: 'FullStack', monthDuration: 7},
//         {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
 let courseWrap2 = document.createElement('div');
for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
    let elementWrap = document.createElement('div');
    elementWrap.classList.add('item');
    
    let elementHeading = document.createElement('h1');
    elementHeading.classList.add('heading') ;
    elementHeading.innerText = coursesAndDurationArrayElement.title;

    let elementParag = document.createElement('p');
    elementParag.classList.add('description');
    elementParag.innerText = ` Час навчання: ${coursesAndDurationArrayElement.monthDuration}`;

    elementWrap.appendChild(elementHeading);
    elementWrap.appendChild(elementParag);
    courseWrap2.appendChild(elementWrap);
}

document.body.appendChild(courseWrap2);

//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

let boxSimpsons = document.createElement('div');
document.body.appendChild(boxSimpsons);
for (const item of simpsons) {
    
    let boxSimpson = document.createElement('div');
    boxSimpson.classList.add('member');
    boxSimpsons.appendChild(boxSimpson);

    let img = document.createElement('img');
    img.src = `${item.photo}`;
    img.alt = `${item.name}`;
    boxSimpson.appendChild(img);

    let nameHero = document.createElement('h2');
    nameHero.innerHTML = `<u>${item.name} ${item.surname} (${item.age} років)</u>`;
    boxSimpson.appendChild(nameHero);

    let infoHero = document.createElement('p');
    infoHero.innerText = `${item.info}`;
    boxSimpson.appendChild(infoHero);
}

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом