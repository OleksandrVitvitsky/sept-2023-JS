//    зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів




let arrObjects = [];
for (let i = 1; i <= 100; i++) {
    arrObjects.push({name: "Object: " + i});
}






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
    window.location.href = 'task3.html';
});

document.getElementById('btn_next').addEventListener('click',function (){
    window.location.href = 'task5.html';
});
