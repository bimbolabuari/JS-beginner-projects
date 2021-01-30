const form = document.querySelector('#form');
const textbox = document.querySelector('.textbox');
const button = document.querySelector('.button');
const dataInput = document.querySelector('.data-input');

function addValue(event) {
  event.preventDefault();
  const entryDiv = document.createElement('div');
  entryDiv.className = 'myEntries';
  if (textbox.value === '') {
    entryDiv.style.display = 'none';
  } else {
    entryDiv.textContent = textbox.value;
  }
  dataInput.appendChild(entryDiv);
  textbox.value = '';
  const deleteButton = document.createElement('button');
  deleteButton.className = 'deleteButton';
  deleteButton.textContent = 'delete';
  entryDiv.appendChild(deleteButton);
  deleteButton.addEventListener('click', () => {
    entryDiv.className = 'fade-out';
  });
}

form.addEventListener('submit', addValue);
