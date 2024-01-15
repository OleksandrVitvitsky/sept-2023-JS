const URl_Users = new URL('https://jsonplaceholder.typicode.com/users');

const GetUsers = async (url) => {
    await fetch(url)
        .then(data => data.json())
        .then(data => createUsersDom(data));
}

const createUsersDom = (users) => {

   let divBoxCol1 = document.getElementById("flex__col1");
   let divBoxCol2 = document.getElementById("flex__col2");
    users.forEach((user) => {

        let divUser = document.createElement('div')
        divUser.classList.add('user');

        let userHeading2  = document.createElement('h2');
        userHeading2.classList.add('userHeading2');
        userHeading2.innerText = `user id: ${user.id}` ;

        let userHeading3 = document.createElement('h3');
        userHeading3.classList.add('userHeading3');
        userHeading3.innerText = `user name: ${user.name}`;

        let userDetailsLink = document.createElement('a');
        userDetailsLink.classList.add('userDetails__link');
        userDetailsLink.innerText = 'about user';
        userDetailsLink.href = 'user-details/user-details.html?id=' + user.id;
        userDetailsLink.setAttribute('target','_blank');

        divUser.appendChild(userHeading2);
        divUser.appendChild(userHeading3);
        let divUserDetailsLink = document.createElement('div')
        divUserDetailsLink.classList.add('divUserDetailsLink');
        divUserDetailsLink.append(userDetailsLink)
        divUser.appendChild(divUserDetailsLink);

        let divToAppend = user.id % 2 !== 0 ? divBoxCol1 : divBoxCol2;
        divToAppend.appendChild(divUser);
    })
}

void GetUsers(URl_Users);