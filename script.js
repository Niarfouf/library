
const myLibrary = [];
const library = document.querySelector(".library")
const form = document.querySelector("#add-book")
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.status = () => {
    if (this.read === "yes") {
        this.read = "no"
    } else {
        this.read = "yes"
    }
}}
form.addEventListener("submit", event => {
    event.preventDefault()
    let book = new Book(this.title.value, this.author.value, this.pages.value, this.read.value)
    addBookToLibrary(book)
    displayBooks()
})
function addBookToLibrary(book) {
    myLibrary.push(book)
  }


function displayBooks() {
    library.textContent = ""
    myLibrary.forEach((e, i) => {
        let newDiv = document.createElement("div")
        let title = document.createElement("h2")
        let author = document.createElement("p")
        let pages = document.createElement("p")
        let read = document.createElement("p")
        let remove = document.createElement("button")
        let readButton = document.createElement("button")
        title.textContent = "Title: " + e.title
        author.textContent = "Author: " + e.author
        pages.textContent = "Pages: " + e.pages
        read.textContent = "Read: " + e.read
        readButton.textContent = "read/unread"
        remove.textContent = "Remove"
        
        remove.setAttribute("data", i)
        remove.addEventListener("click", e => {
            myLibrary.splice(this.data, 1)
            document.querySelector("#div" + i).remove()
        })
        readButton.addEventListener("click", e => {
            myLibrary[i].status()
            document.querySelector("#read" + i).textContent = "Read: " + myLibrary[i].read
        })
        newDiv.appendChild(title)
        newDiv.appendChild(author)
        newDiv.appendChild(pages)
        newDiv.appendChild(read)
        newDiv.appendChild(remove)
        newDiv.appendChild(readButton)
        newDiv.classList.add("book")
        read.setAttribute("id", "read" + i)
        newDiv.setAttribute("id", "div" + i)
        library.appendChild(newDiv)
    })
}
