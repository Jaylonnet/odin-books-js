let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    addBookToPage(book)
}


const addBook = document.querySelector('#add-book')
addBook.addEventListener('click', () => {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    addBookToLibrary(title, author, pages,  read);
})


const tableBody = document.querySelector('table tbody')
function addBookToPage(book) {
    const tableRow = document.createElement('tr')
    tableRow.setAttribute('data-index', myLibrary.indexOf(book))
    const titleTd = document.createElement('td')
    const authorTd = document.createElement('td')
    const pagesTd = document.createElement('td')
    const readTd = document.createElement('td')

    const removeTd = document.createElement('td')
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove Book'
    removeButton.classList.add('remove')
    removeTd.appendChild(removeButton)
    removeButton.setAttribute('onclick', `removeBook(${myLibrary.indexOf(book)})`)

    titleTd.textContent = book.title
    authorTd.textContent = book.author
    pagesTd.textContent = book.pages
    readTd.textContent = book.read
    tableRow.append(titleTd, authorTd, pagesTd, readTd, removeTd)
    tableBody.appendChild(tableRow)
}

function removeBook(index) {
    const tRow = document.querySelector(`tr[data-index="${index}"]`)
    tRow.remove()
}