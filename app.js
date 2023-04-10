let myLibrary = [];



function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
  /*createBookCard(this.title, this.author, this.pages, this.read, this);*/
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

function showBooks(){
  //clear the card area first
  document.getElementById("bookCardArea").innerHTML = "";

  //iterate through library to diplay all books
  for(let i = 0; i < myLibrary.length; i++){
    let bookCardArea = document.getElementById("bookCardArea");
    let cardDiv = document.createElement("div");
    cardDiv.id = "cardDiv";
    cardDiv.class = "card"+`${i}`;
    console.log(cardDiv.class);
    bookCardArea.appendChild(cardDiv);
    let titleText = document.createElement("h3");
    titleText.textContent = myLibrary[i].title;
    cardDiv.appendChild(titleText);
    
    //Add book cover image
      
    if (myLibrary[i].title == "Acotar"){
      let coverImage = document.createElement("img");
      coverImage.id = "coverImg";
      coverImage.src = "Images/acotar.jpeg";
      cardDiv.appendChild(coverImage);
    } else if (myLibrary[i].title == "Fbaa"){
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
    authorText.textContent = "By " + myLibrary[i].author;
    cardDiv.appendChild(authorText);
    let pagesText = document.createElement("p");
    pagesText.textContent = myLibrary[i].pages + " pages";
    cardDiv.appendChild(pagesText);
    let readText = document.createElement("p");
    readText.textContent = "Read: " + myLibrary[i].read;
    cardDiv.appendChild(readText);

    //display read and delete button
    let buttonDiv = document.createElement("div");
    buttonDiv.class = "buttons";
    cardDiv.appendChild(buttonDiv);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    buttonDiv.appendChild(deleteBtn);
    deleteBtn.class = i;
    deleteBtn.addEventListener("click", (event) => {
      for(let i = 0; i< 50; i++){
        
        if(deleteBtn.class == i){
            myLibrary.splice(i, 1);
            showBooks();
        }
      }
    });

    let readBtn = document.createElement("button");
    readBtn.textContent = "Change Read Status";
    readBtn.class = i;
    
    //toggle the read status on the card
    readBtn.addEventListener("click", (event) => {
      for(i = 0; i < myLibrary.length; i++){
        if (cardDiv.class == "card" + i){
          if(readText.textContent == "Read: Yes"){
            readText.textContent = "Read: No";
            myLibrary[i].read = "No";
          } else {
            readText.textContent = "Read: Yes";
            myLibrary[i].read = "Yes";
          }
        } 
        
      }
     
    });


    buttonDiv.appendChild(readBtn);

  }
}



