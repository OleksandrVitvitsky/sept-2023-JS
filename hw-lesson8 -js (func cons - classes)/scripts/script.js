// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function CreateUser (id, name, surname , email, phone) {
        this.id= id;
        this.name= name;
        this.surname= surname;
        this.email= email;
        this.phone= phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
const Users = [];

Users.push(
    new CreateUser(8, 'Nick', 'Fury', 'nickFury@gamil.com', '529-54321-521'),
    new CreateUser(1, 'Stive', 'Rogers', 'stiveRog@gamil.com', '5541-113-4513'),
    new CreateUser(10,'Spider', 'Man', 'spiderMan@gamil.com', '31-451351-351'),
    new CreateUser(3, 'Natasha', 'Romanov', 'nata@gamil.com', '526411-16-54'),
    new CreateUser(5, 'Mudak', 'Halk', 'greenHalk@gamil.com', '11-55-66-99'),
    new CreateUser(9, 'Tony', 'Stark', 'tonySS@gamil.com', '09863542872'),
    new CreateUser(6, 'Iron', 'Man', 'ironMan@gamil.com', '0632548547'),
    new CreateUser(7, 'God', 'Thor', 'thor@gamil.com', '0958745123'),
    new CreateUser(2, 'Scarlet', 'Witch', 'witch@gamil.com', '088-5544-65'),
    new CreateUser(9, 'Doctor', 'Strange', 'str@gamil.com', '5645-61161')
);
console.log(Users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const FilteredUsers = Users.filter( item => item.id % 2 === 0 )
console.log(FilteredUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const SortedUsers = FilteredUsers.sort( (a, b) => a.id - b.id)
console.log(SortedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class CreateClient {
        constructor (id, name, surname, email, phone, order) {
                this.id = id;
                this.name = name;
                this.surname = surname;
                this.email = email;
                this.phone = phone;
                this.order = order;
        }            
}

// створити пустий масив, наповнити його 10 об'єктами Client
const Clients = Users.map(item => item);  /// !!! використав існуючий масив Users, зкопіювавши його в новий об"экт

for (let i = 0; i < Clients.length; i++) {
        let quantItems =    Math.floor(((((Clients[i].name.length*5) + Clients[i].surname.length) / 2) + Clients[i].id));
        let orderItems = [];
        for (let j = 0; j < quantItems; j++) {
                orderItems.push(`product-${j}`);               
        }
        Clients[i].order = orderItems;          
            
}
 console.log(Clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const newSortedClients = Clients.sort( (a, b) => a.order.length - b.order.length);
console.log(newSortedClients);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function writeAboutCar (car) {
        for (const carKey in car) {
               let field = car[carKey];
                if ((typeof field !== 'function')) {
                        if (typeof field === 'object') {
                                writeAboutCar(field);
                        } else {
                                console.log(`${carKey}  - ${field}`);
                        }
                }
        }        
        
}
function CreateCar(model, producer, year, maxSpeed, engine) {

        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.getDrive = () => {
                console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };
        this.info = () => {
                writeAboutCar(this);
        };
        this.increaseMaxSpeed = (newSpeed) => {
                this.maxSpeed = newSpeed;
        };
        this.changeYear = (newValue) => {
                this.year = newValue;
        };
        this.addDriver = (driverName, driverAge) => {
                this.driver = {driverName, driverAge};
        };
}
let suzik = new CreateCar('Suzuki','Suzuki Japan',2018,180, 1599);

suzik.getDrive();
suzik.increaseMaxSpeed(220);
suzik.getDrive();
suzik.changeYear(2022);
suzik.addDriver('Masha',95);
suzik.info();



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class _CreateCar {
        constructor(model, producer, year, maxSpeed, engine) {
                this.model = model;
                this.year = year;
                this.maxSpeed = maxSpeed;
                this.engine = engine;
        }
        getDrive ()  {
                console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину!`);
        }
        info() {
                console.log('About this car:');
                writeAboutCar(this);
        }
        increaseMaxSpeed(newSpeed) {
                this.maxSpeed = newSpeed;
        }
        changeYear(newValue) {
                this.year = newValue;
        }
        addDriver (driverName, driverAge) {
                this.driver = {driverName, driverAge};
        };
}

let mazda = new _CreateCar('Mazda RX-7','Mazda',2023,380, 4599);

mazda.getDrive();
mazda.increaseMaxSpeed(888);
mazda.getDrive();
mazda.changeYear(2000);
mazda.addDriver('Nick',18);
mazda.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class CreatePopelushka{
        constructor (name, age, footSize) {
                this.name = name;
                this.age = age;
                this.footSize = footSize;
        }
}

let arrayGirls = [];
arrayGirls.push(
    new CreatePopelushka('Маша', 31, 35),
    new CreatePopelushka('Соня', 47, 41),
    new CreatePopelushka('Катя', 23, 38),
    new CreatePopelushka('Рома',18, 37),
    new CreatePopelushka('Оля', 35, 32),
    new CreatePopelushka('Іра', 36, 41),
    new CreatePopelushka('Олена', 26,35),
    new CreatePopelushka('Аліна',50 , 40),
    new CreatePopelushka('Саша',33,33),
    new CreatePopelushka('Віка',32,38));

class CreatePrince{
        constructor (name, age, size) {
                this.name = name;
                this.age = age;
                this.size = size;
        }
}

let prince = new CreatePrince('Bob',90, 32);

for (const element of arrayGirls) {
        if (element.footSize === prince.size){
                console.log(`Знайшли попелюшку ))  - ${element.name}`);
        }
}
let findedGirl = arrayGirls.find(item => item.footSize === prince.size );
console.log(`Знайшли попелюшку (функція find)  - ${findedGirl.name}`);