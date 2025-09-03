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
  bookChild.innerHTML = `<div class="book-legend"><p>Title</p><p>Author</p><p>Status</p></div><div class="book-info"><p class='book-title'>${elem.title}</p><p class='book-author'>${elem.author}</p><p class='book-status'>${elem.isRead ? 'Already read' : "Hasn't been read yet"}</p></div>`;

  booksList.appendChild(bookChild);
});
