// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let dom__wrap = document.createElement('div');
dom__wrap.classList.add("wrap");
let dom__form = document.createElement('form');
dom__form.name = 'form';

let dom__Heading2 = document.createElement('h2');
dom__Heading2.classList.add('heading2');
dom__Heading2.innerText = 'Counter: ';
let dom__btn = document.createElement('input');
dom__btn.classList.add('btn-input');
dom__btn.name = 'refresh'
dom__btn.type  = 'submit';
dom__btn.value = 'Refresh';


dom__form.appendChild(dom__Heading2);
dom__form.appendChild(dom__btn);
dom__wrap.appendChild(dom__form);
document.body.appendChild(dom__wrap);



let dom__h2 = document.getElementsByClassName('heading2');
let isData = localStorage.getItem('counter');
if (!isData){
    localStorage.setItem('counter',JSON.stringify({value: 1}));
} else {
    let isValue = JSON.parse(isData);
    isValue.value++;
    console.log(isValue);
    localStorage.setItem('counter', JSON.stringify(isValue));
}
dom__h2[0].innerText = ` Counter: ${JSON.parse(localStorage.getItem('counter')).value}`;





function createButtons(){
    let buttonsGroup = document.createElement('div');
    buttonsGroup.classList.add("btns-box");
    let btn_prev =  document.createElement('button');
    btn_prev.id = 'btn_prev';
    btn_prev.classList.add('btn');
    btn_prev.innerText = ' <- prev';

    let btn_Next =  document.createElement('button');
    btn_Next.id = 'btn_next';
    btn_Next.classList.add('btn');
    btn_Next.innerText = 'next ->';

    buttonsGroup.appendChild(btn_prev);
    buttonsGroup.appendChild(btn_Next);
    document.body.appendChild(buttonsGroup);
}

createButtons();

document.getElementById('btn_prev').addEventListener('click',function (){
    window.location.href = 'index.html';
});

document.getElementById('btn_next').addEventListener('click',function (){
    window.location.href = 'task3.html';
});
