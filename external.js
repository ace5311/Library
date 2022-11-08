let grid = document.querySelector(".container");

let myLibrary = [
    {title:'Harry Potter Book 1', author:'J.K. Rowling', pages:112},
    {title:'Greatest Beer Run', author:'Chickie Robert', pages:156}
];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(library) {
    for (i=0;i<myLibrary.length;i++) {
        const card=document.createElement('div');
        card.className = "card"
        card.id= "card" + i;
        grid.appendChild(card);
    }
}

addBookToLibrary(myLibrary);

//const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295)