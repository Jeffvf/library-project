let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    
    myLibrary.push(book);
}

addBookToLibrary('Mistborn', 'Brandon Sanderson', 458, true);
addBookToLibrary('Stormlight Archive', 'Brandon Sanderson', 1508, true);
addBookToLibrary('Wheel of Time', 'Robert Jordan', 679, false);

function capitalizeFirstLetter(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function displayBooks(){
    const lib = document.querySelector('.lib-books');
    for(const book of myLibrary){
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<h1>${book.title}</h1>`;
        for(const key in book){
            if(key == 'read'){
                let status_read = book.read ? 'Already read' : 'Not read yet';
                let newKey = capitalizeFirstLetter(key);
                div.innerHTML += `<p><b>${newKey}:</b> ${status_read}</p>`;
            }
            else if(key != 'title'){
                let newKey = capitalizeFirstLetter(key);
                div.innerHTML += `<p><b>${newKey}:</b> ${book[key]}</p>`;
            }
        }
        lib.appendChild(div);
    }
}

displayBooks();