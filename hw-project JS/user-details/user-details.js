const URl_Users = new URL('https://jsonplaceholder.typicode.com/users');
function ScrollingPage() {
    let mainWrapPosts = document.getElementById('mainWrapPosts');

    let heightOfMainWrapPosts = mainWrapPosts.getBoundingClientRect().height;
    window.scrollBy({
        top: heightOfMainWrapPosts,
        left: 0,
        behavior: 'smooth'
    });
}
function getParamsUserId() {
    return new URL(location.href).searchParams.get('id');
}

const UserId = getParamsUserId();
const GetUserDetails = async (url) => {
    await fetch(url)
        .then(data => data.json())
        .then(data => createUsersDetailsDom(data));
}
function createUserDetails(object, ul) {
    for (const objectKey in object) {
        let li = document.createElement('li')
        if (typeof object[objectKey] !== 'object') {
            li.innerText = `${objectKey}:  ${object[objectKey]}`;
            ul.appendChild(li)
        } else {
            li.innerText = `${objectKey}`;
            let newUl = document.createElement('ul');
            createUserDetails(object[objectKey], newUl);
            li.appendChild(newUl)
        }
        ul.appendChild(li)
    }
}
const CreateUsersPostsDom =  (posts)=>{
    let mainWrapPosts = document.createElement('div');
    mainWrapPosts.setAttribute('id','mainWrapPosts');

    let wrapForPosts = document.createElement('div');
    wrapForPosts.setAttribute('id','wrapForPosts');
    let i = 0;
    posts.forEach((post) => {


        let postWrap = document.createElement('div');
        postWrap.setAttribute('id','post')
        postWrap.innerHTML = `<h2>Post - ${post.id} </h2> <h4>Title ${post.title}</h4>`;

        let userPostLink = document.createElement('a');
        userPostLink.setAttribute('target', '_blank');
        userPostLink.innerText = 'get more info';
        userPostLink.href = '../posts/post-details.html?param=' + JSON.stringify(post);

        let wrapUserPostLink = document.createElement('div');
        wrapUserPostLink.setAttribute('class', 'wrapUserPostLink');

        wrapUserPostLink.appendChild(userPostLink);

        postWrap.appendChild(wrapUserPostLink)

         if (i % 5 === 0) {
             wrapForPosts = document.createElement('div');
             wrapForPosts.id = 'wrapForPosts';
             mainWrapPosts.appendChild(wrapForPosts);

        }
        wrapForPosts.appendChild(postWrap)
        i += 1;
    })

    mainWrapPosts.appendChild(wrapForPosts);
    document.body.appendChild(mainWrapPosts);
   ScrollingPage();
}
const GetUserPosts = async (url)=> {
    await fetch(url)
        .then(data => data.json())
        .then(data => CreateUsersPostsDom(data));
}
function ShowUserPosts(id) {
    let url = new URL('https://jsonplaceholder.typicode.com/users/' + id + '/posts');
    void GetUserPosts(url);
}
const createUsersDetailsDom = (user) => {
    let headingUserDetails = document.getElementsByTagName('h1')[0];
    headingUserDetails.innerHTML = `About user:  <span> ${user.name}</span>`;
    let wrapUserDetail = document.getElementById('wrap__userDetail');
    let ul = document.createElement('ul')
    createUserDetails(user, ul);
    wrapUserDetail.append(ul);

    let btnGetUP = document.createElement('button');
    btnGetUP.setAttribute('id', 'button__UserPosts');
    btnGetUP.innerText = 'Posts of current user';
    btnGetUP.addEventListener('click', function (event) {
        event.preventDefault();
        let mainWrapPosts = document.getElementById('mainWrapPosts');
        if (!mainWrapPosts) {
            ShowUserPosts(UserId);
        }
        ScrollingPage();
    });
    wrapUserDetail.append(btnGetUP);
}

void GetUserDetails(URl_Users + '/' + UserId);