// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку,
// на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let baseUrl = 'https://jsonplaceholder.typicode.com';
let baseList = 'users';
const getUsers  = async (url) => {
    await fetch(url)
    .then(data => data.json())
        .then(data => domStructure(data));
}

void getUsers(baseUrl+ '/' +baseList);

const domStructure = (users) => {
   let mainContainer = document.createElement('div')
   mainContainer.classList.add('main');

   let ul = document.createElement('ul')

    users.forEach((user) => {
        let li = document.createElement('li')
        let a = document.createElement('a');
        a.innerText = `user-id: ${user.id}  user-name: ${user.name}` ;
        a.href = 'user-details.html?id=' + user.id;
        a.style.textDecoration = 'none';
        a.style.color = 'black';
        a.target = '_blank';
        li.appendChild(a);
        ul.appendChild(li);
    })

    mainContainer.appendChild(ul);
    document.body.appendChild(mainContainer);
}
