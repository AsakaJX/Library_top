import {
  library,
  Book,
  addBookToLibrary,
  printAllBooks,
} from '../backend/library.js';

console.log('adding test books to library...');

addBookToLibrary('Harry Potter', 'idk', true);
addBookToLibrary('Harry Potter 2', 'idk 2', true);
addBookToLibrary('Harry Potter 3', 'idk 3', false);

printAllBooks();

const booksList = document.querySelector('#book-list');

library.forEach((elem) => {
  const bookChild = document.createElement('li');

  bookChild.setAttribute('id', elem.id);

  // adding book info elements
  bookChild.innerHTML = `<div id="book-main-container"><p class="book-title-label">Title</p><p class="book-author-label">Author</p><p class="book-status-label">Status</p><p class='book-title'>${elem.title}</p><p class='book-author'>${elem.author}</p><p class='book-status'>${elem.isRead ? 'Already read' : "Hasn't been read yet"}</p></div>`;

  // adding book management button elements
  bookChild.innerHTML += `<div class="book-buttons-container"><button class="book-read-button">${elem.isRead ? 'Not read' : 'Read'}</button><button class="book-remove-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg></button></div>`;

  booksList.appendChild(bookChild);
});

// Book management logic

const bookRemoveBtn = document.querySelectorAll(
  '#book-list li .book-buttons-container .book-remove-button'
);

bookRemoveBtn.forEach((item) => {
  item.addEventListener('click', (event) => {
    let parent = event.target;

    while (String(parent.tagName).toLowerCase() !== 'li') {
      parent = parent.parentElement;
    }

    parent.remove();
  });
});

const bookStatusBtn = document.querySelectorAll(
  '#book-list li .book-buttons-container .book-read-button'
);

bookStatusBtn.forEach((item) => {
  item.addEventListener('click', (event) => {
    let parent = event.target;

    while (String(parent.tagName).toLowerCase() !== 'li') {
      parent = parent.parentElement;
    }

    const uuid = parent.getAttribute('id');

    library.forEach((element) => {
      if (element.id === uuid) {
        element.isRead = !element.isRead;

        const elemStatus = document
          .getElementById(uuid)
          .querySelector('.book-status');
        elemStatus.textContent = `${element.isRead ? 'Already read' : "Hasn't been read yet"}`;

        const elemIsReadButton = document
          .getElementById(uuid)
          .querySelector('.book-read-button');
        elemIsReadButton.textContent = `${element.isRead ? 'Not read' : 'Read'}`;
      }
    });
  });
});
