
const sessions = localStorage.getItem('sessions');
const data = sessions ? JSON.parse(sessions) : [];

for (const item of data) {
    const block = document.createElement('div');
    block.innerText = item.date;
    document.body.appendChild(block);
}