let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

        this.info = function () {
            if (this.read) {
                return `${this.title} by ${this.author}, ${pages} pages, already read`;
            }
            return `${this.title} by ${this.author}, ${pages} pages, not read yet`;
        };
    }
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
}

function displayBooks(){
    for(const book of myLibrary){
        console.log(book.info());
    }
}