const grid = document.querySelector(".container");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const submit = document.querySelector('#submit');
const statusBtn = document.querySelectorAll('.status')
let userChoice = '';

let myLibrary = [
    {title:'Harry Potter Book 1', author:'J.K. Rowling', pages:112, read: 'Yes'},
    {title:'Greatest Beer Run', author:'Chickie Robert', pages:156, read: 'No'}
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function deleteLibrary(){
    grid.innerHTML='';
    title.value='';
    author.value='';
    pages.value='';
}

function displayLibrary(library) {
    for (let i=0;i<library.length;i++){
        let booknum = 'status'+i;
        let deleteNum= 'delete'+i;
        const card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = `<p class='bookTitle'>Title: ${library[i].title}</p><p>Author: ${library[i].author}</p>
                        <p>Pages: ${library[i].pages}</p><p>Read: <button class=status id=${booknum}>${library[i].read}</button></p>
                        <p><button class='deleteBtn' id=${deleteNum}>Delete Book</button></p>`;
        grid.appendChild(card);
    }
}

function addBookToLibrary(){
    if (author.value === ''|| title.value === '' || pages.value === ''){
        alert('Input all book information')
    }
    else{
        const newBook = new Book(title.value, author.value, pages.value, read.value);
        myLibrary.push(newBook);
    }
}

displayLibrary(myLibrary);
submit.onclick = () => {
    addBookToLibrary();
    deleteLibrary();
    displayLibrary(myLibrary);
};

grid.addEventListener('click', function(e) {
    if (e.target.id.includes('status')){
        let idNum = e.target.id.replace('status','');
        if (myLibrary[idNum].read === 'Yes'){
            myLibrary[idNum].read = 'No'
        }
        else {
            myLibrary[idNum].read = 'Yes'
        }
        deleteLibrary();
        displayLibrary(myLibrary);
    }
    if (e.target.id.includes('delete')){
        let deleteNum = e.target.id.replace('delete','');
        myLibrary.splice(deleteNum,1);
    }
    deleteLibrary();
    displayLibrary(myLibrary);
});

