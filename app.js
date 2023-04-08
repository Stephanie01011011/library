let myLibrary = [];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
  createBookCard(this.title, this.author, this.pages, this.read);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  
}

function openForm(){
    //display the form
   document.getElementById("formArea").style.display = "block";
   
   //display a close button at top of form
   document.getElementById("closeBtn").style.display = "block";
   
  
}

function closeForm(){
    document.getElementById("formArea").style.display = "none";
    document.getElementById("closeBtn").style.display = "none";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").value = "";
}

function onSubmit(){
    let form = document.getElementById("addForm");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;

    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    closeForm();
}

function createBookCard(title, author, pages, read){
    let bookCardArea = document.getElementById("bookCardArea");
    let cardDiv = document.createElement("div");
    cardDiv.id = "cardDiv";
    bookCardArea.appendChild(cardDiv);
    let titleText = document.createElement("h3");
    titleText.textContent = title;
    cardDiv.appendChild(titleText);
    let authorText = document.createElement("h4");
    authorText.textContent = author;
    cardDiv.appendChild(authorText);
    let pagesText = document.createElement("h4");
    pagesText.textContent = pages;
    cardDiv.appendChild(pagesText);
}
