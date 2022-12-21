let myLibrary = [];
let container = document.getElementById("container");
var disp = document.querySelector("#button");
var div = document.createElement('div');



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
this.books = new Book(this.title, this.author, this.pages, this.read)

    myLibrary.push(books);

console.log(myLibrary) //no errors but only does console log which means results are transferring properly..should this access the prototype?
}


/*function display() {
prompt("yay")
} */

let myTable = document.querySelector('#table');

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

    