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

addBookToLibrary('Mistborn', 'Brandon Sanderson', 458, true);
addBookToLibrary('Stormlight Archive', 'Brandon Sanderson', 1508, true);
addBookToLibrary('Wheel of Time', 'Robert Jordan', 679, true);

function displayBooks(){
    const lib = document.querySelector('.lib-structure');
    for(const book of myLibrary){
        let div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML = `${book.info()}`;
        lib.appendChild(div);
    }
}

displayBooks();