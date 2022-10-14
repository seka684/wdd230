const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('list');

button.addEventListener('click', () => {
    const mychapter = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');  

    
    listItem.appendChild(listText);
    listText.textContent = mychapter;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
      list.removeChild(listItem);
    });

    input.focus();
});