let myLibrary = [];
let i = 0;


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
  createBookCard(this.title, this.author, this.pages, this.read, this);
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

function createBookCard(title, author, pages, read, book){
    i++
    let bookCardArea = document.getElementById("bookCardArea");
    let cardDiv = document.createElement("div");
    cardDiv.id = "cardDiv";
    bookCardArea.appendChild(cardDiv);
    let titleText = document.createElement("h3");
    titleText.textContent = title;
    cardDiv.appendChild(titleText);
    
    //Add book cover image
      
    if (book.title == "Acotar"){
      let coverImage = document.createElement("img");
      coverImage.id = "coverImg";
      coverImage.src = "Images/acotar.jpeg";
      cardDiv.appendChild(coverImage);
    } else if (book.title == "Fbaa"){
      let coverImage = document.createElement("img");
      coverImage.id = "coverImg";
      coverImage.src = "Images/fbaa.jpeg";
      cardDiv.appendChild(coverImage);
    } else {
      let coverImage = document.createElement("img");
      coverImage.id = "coverImg";
      coverImage.src = "Images/genericBook.jpeg";
      cardDiv.appendChild(coverImage);
    }
  
     
  

    let authorText = document.createElement("p");
    authorText.textContent = author;
    cardDiv.appendChild(authorText);
    let pagesText = document.createElement("p");
    pagesText.textContent = pages;
    cardDiv.appendChild(pagesText);
    let readText = document.createElement("p");
    readText.textContent = read;
    cardDiv.appendChild(readText);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    cardDiv.appendChild(deleteBtn);
    

    
    
}





