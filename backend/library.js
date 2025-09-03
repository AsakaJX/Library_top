export const library = [];

export function Book(title, author, isRead = false) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.isRead = isRead;
}

export function addBookToLibrary(title, author, isRead = false) {
  library.push(new Book(title, author, isRead));
}

export function printAllBooks() {
  for (const book of library) {
    console.log(`${book.id}: ${book.title} by ${book.author} [${book.isRead}]`);
  }
}
