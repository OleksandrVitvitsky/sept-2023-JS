
function createPostField(post,ul) {
    for (const Key in post) {
        let li = document.createElement('li')
        if (typeof post[Key] !== 'object') {
            li.innerText = `${Key}:   ${post[Key]}`;
            ul.appendChild(li)
        } else {
            li.innerText = `${Key}`;
            let newUl = document.createElement('ul');
            createPostField(post[Key], newUl);
            li.appendChild(newUl)
        }
        ul.appendChild(li)
    }
}

const CreatePostDom = (post) => {
    let wrapPost = document.createElement('div');
    wrapPost.setAttribute('id', 'wrapPost');

    let headingPost = document.createElement('h1');
    headingPost.innerHTML = `Post# <span> ${post.id}</span>`;

    let ul = document.createElement('ul')
    createPostField(post, ul);

    wrapPost.appendChild(headingPost);
    wrapPost.appendChild(ul);

    let mainWrapPost = document.getElementById('mainWrapPost');
    mainWrapPost.appendChild(wrapPost);


}


function ScrollingPage() {
    let mainWrapComments = document.getElementById('mainWrapPosts');

    let heightOfmMainWrapComments = mainWrapComments.getBoundingClientRect().height;
    window.scrollBy({
        top: heightOfmMainWrapComments,
        left: 0,
        behavior: 'smooth'
    });
}
const CreatePostCommentsDom = (comments) =>{
    let mainWrapComments = document.createElement('div');
    mainWrapComments.setAttribute('id','mainWrapComments') ;

    let wrapForComments = document.createElement('div');
    wrapForComments.setAttribute('id','wrapForComments') ;

    let i = 0;
    console.log(comments.length);
    comments.forEach((comment) =>{

        let wrapComment = document.createElement('div');
        wrapComment.setAttribute('id','wrapComment');
        wrapComment.innerHTML = `<h2>Comment #${i + 1} </h2> <h4> coment id: ${comment.id}</h4>
                <p><b>Name:</b> ${comment.name}</p>
                <p><b>email:</b> ${comment.email}</p> <p><b>Text:</b> ${comment.body}</p>`;

        if (i % 4 === 0) {
            wrapForComments = document.createElement('div');
            wrapForComments.setAttribute('id','wrapForComments');
            mainWrapComments.appendChild(wrapForComments);
        }
        i++;
        wrapForComments.appendChild(wrapComment);
    })

    mainWrapComments.appendChild(wrapForComments);
    document.body.appendChild(mainWrapComments);
    ScrollingPage();
}
const GetPostComments = async (postId) => {
    let url = new URL('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments');
    await fetch(url)
        .then(data => data.json())
        .then(data => CreatePostCommentsDom(data));
}
const GetPostDetails = () => {
    const Post = JSON.parse(new URL(location.href).searchParams.get('param'));
    CreatePostDom(Post);
    void GetPostComments(Post.id);
}

void GetPostDetails();






