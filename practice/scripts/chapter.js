const input = document.getElementsByClassName('input');
const button = document.getElementsByClassName('button');
const list = document.getElementsByClassName('list')

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