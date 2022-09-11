const myLibrary = [];

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
    displayBooks();
}

function capitalizeFirstLetter(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function displayBooks(){
    const lib = document.querySelector('.lib-books');
    lib.innerHTML = "";
    
    for(const book of myLibrary){
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += '<span class="delete-book">&times;</span>';
        div.innerHTML += `<h1>${book.title}</h1>`;
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
    refreshDeleteBtn();
}

function refreshDeleteBtn(){
    deleteBook = document.getElementsByClassName('delete-book');

    for(book of deleteBook){
        book.addEventListener('click', event => {
        const thisCard = event.composedPath()[1]; // select card
        const title = thisCard.childNodes[1].textContent; // select book title

        for(let i = 0; i < myLibrary.length; i++){
            if(myLibrary[i].title == title){
                myLibrary.splice(i, 1);
                displayBooks();
            }
        }
        });
    }
}

const modal = document.getElementById("myModal");

const btn = document.getElementById('new-book-forms');

const submitBtn = document.getElementById('insert-book');

const span = document.getElementsByClassName("close")[0];

const form = document.getElementById('book-forms');

let deleteBook = document.getElementsByClassName('delete-book');

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

form.addEventListener('submit', (form) => {
    form.preventDefault(); 

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    document.getElementById('book-forms').reset();
    modal.style.display = "none";
});