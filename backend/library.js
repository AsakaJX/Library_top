export let library = [];

export function updateLibraryArray(array) {
  library = array;
}

export class Book {
  constructor(title, author, isRead = false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  }

  changeStatus(newStatus) {
    this.isRead = newStatus;
  }
}

export function addBookToLibrary(title, author, isRead = false) {
  library.push(new Book(title, author, isRead));
}

export function printAllBooks() {
  for (const book of library) {
    console.log(`${book.id}: ${book.title} by ${book.author} [${book.isRead}]`);
  }
}
