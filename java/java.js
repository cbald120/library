let myLibrary = [];
//let container = document.getElementById("container");
var disp = document.querySelector("#button");
var div = document.createElement('div');
var sub = document.querySelector('#submit');



class Book {
    constructor(title, author, pages, read) {
        this.title = title; 
        this.author = author; 
        this.pages = pages; 
        this.read = read; 
}}

let hobbit = new Book("hobbit", "tolkien", "500", "yes")
let snow = new Book("Frost", "Jack", "78", "yes")

addBookToLibrary(hobbit)
addBookToLibrary(snow)



let headers = ['title', 'author', 'pages', 'read?']


function addBookToLibrary(books) { 
this.books = new Book(this.title, this.author, this.pages, this.read) //added this. not sure it's a good idea...idk what im doing

    myLibrary.push(books);

console.log(myLibrary) //no errors but only does console log which means results are transferring properly..should this access the prototype?
}

let myTable = document.querySelector('#table');


//displays current array in table
disp.addEventListener("click", function() {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    })
    table.appendChild(headerRow);
    myLibrary.forEach(boo => {
        let row = document.createElement('tr');

        Object.values(boo).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    })

    myTable.appendChild(table);
})
let container = document.querySelector("#container");
const form = container.querySelectorAll('.form'),
        submitInput = form[0].querySelector('input[type="submit"]') //can i include reset under clcik action submit?
   // let submit = document.querySelector("#submit");


function data() {

let title = document.getElementById('title').value;
console.log(title);

let author = document.getElementById('author').value;
console.log(author);

let pages = document.getElementById('pages').value;
console.log(pages);

let read = document.getElementById('read').value;
console.log(read);

this.books = new Book(title, author, pages, read) 

myLibrary.push(books);

console.log(myLibrary)
}

/*
submit.click(function () {
    $("#form")[0].reset();
    return false; // prevent submitting
  }); */
    


//problems that will need to be solved:
//clearing form box after submission without erasing data
//styling
//grid building onitself. Need to reset when display is called
//read box isn't presenting correct value