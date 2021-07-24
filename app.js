//Book class: represents a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


// UI Class: Handle UI tasks.
class UI {

    // Add a book
    static addBookToList(book) {

        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `<td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td>
                <a href="#" class="btn-danger btn-sm delete">X</a>
                </td>`;

        list.appendChild(row);
    }

    //Deleting a book

    static deleteBook(el) {

        if (el.classList.contains('delete')) {

            el.parentElement.parentElement.remove();

        }

    }

    //clear  form Method 

    static clearFormFields() {
        const title = document.getElementById('title').value = ' ';
        const author = document.getElementById('author').value = ' ';
        const isbn = document.getElementById('isbn').value = ' ';
    }


    // showing the alert 

    static showAlertMessage(message, className) {

        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);




        function myFunction() {
            setTimeout(

                function() {

                    let removeMessage = document.querySelector('.alert');
                    removeMessage.remove();

                },
                2000);
        }

        myFunction();

    }
}

document.querySelector('#book-form').addEventListener('submit', (e) => {

    //prevent default
    e.preventDefault();

    //A. access our book 
    //A1. Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // console.log(title, author, isbn);

    //A2. creating a new book Object 

    book = new Book(title, author, isbn);

    UI.addBookToList(book);

    UI.clearFormFields();

    UI.showAlertMessage('Book Added', 'info');

})

document.querySelector('#book-list').addEventListener('click', (e) => {

    //deleting a book from UI

    UI.deleteBook(e.target);
    console.log(e.target);


    UI.showAlertMessage('Book Deleted', 'danger');
})