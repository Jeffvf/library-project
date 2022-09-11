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
    for(const book of myLibrary){
        if(book.title == title){
            alert('Error! This book already exists in your library!');
            return;
        }
    }
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
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
                let status_read = book.read ? ['Already read', "green"] : ['Not read yet', "red"];
                let newKey = capitalizeFirstLetter(key);
                div.innerHTML += `<p><b>${newKey}:</b> <button class="read-button" style="background-color:${status_read[1]}" type="button">${status_read[0]}</button></p>`;
            }
            else if(key != 'title'){
                let newKey = capitalizeFirstLetter(key);
                div.innerHTML += `<p><b>${newKey}:</b> ${book[key]}</p>`;
            }
        }
        lib.appendChild(div);
    }
    refreshDeleteBtn();
    refreshReadBtn();
}

function refreshDeleteBtn(){
    deleteBook = document.getElementsByClassName('delete-book');

    for(const book of deleteBook){
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

function refreshReadBtn(){
    readBtn = document.getElementsByClassName('read-button');

    for(const btn of readBtn){
        btn.addEventListener('click', event => {
            const thisCard = event.composedPath()[1]; // select parent node (p)
            const title = (thisCard.parentNode).childNodes[1].textContent; // select parent of p and book title
            for(let i = 0; i < myLibrary.length; i++){
                if(myLibrary[i].title == title){
                    myLibrary[i].read = !(myLibrary[i].read);
                    displayBooks();
                }
            }
        })
    }
}

const modal = document.getElementById("myModal");

const btn = document.getElementById('new-book-forms');

const submitBtn = document.getElementById('insert-book');

const span = document.getElementsByClassName("close")[0];

const form = document.getElementById('book-forms');

let deleteBook = document.getElementsByClassName('delete-book');

let readBtn = document.getElementsByClassName('read-button');

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