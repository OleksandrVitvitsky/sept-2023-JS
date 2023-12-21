
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


let dom__wrap = document.createElement('div');
dom__wrap.classList.add("wrap");

let dom__button = document.createElement('button');
dom__button.classList.add('btn');
dom__button.id = 'btn';
dom__button.innerText = 'sessions.html';


dom__wrap.appendChild(dom__button);
document.body.appendChild(dom__wrap);

let arrSessions = JSON.parse(localStorage.getItem('sessions')) || [];
arrSessions.push(new Date());
localStorage.setItem('sessions', JSON.stringify(arrSessions));

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
    window.location.href = 'task2.html';
});

document.getElementById('btn_next').addEventListener('click',function (){
  //  window.location.href = 'task4.html';
    alert('Не готово ще ((( ');
});

document.getElementById('btn').addEventListener('click',function (){
   window.location.href = 'sessions.html';
    // window.open('sessions.html', '_blank')
});