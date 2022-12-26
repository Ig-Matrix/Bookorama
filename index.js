//Delete a book
const list =document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li =e.target.parentElement;
        list.removeChild(li);
    }
})

//Add book
const addForm = document.forms[1];

addForm.addEventListener('submit', function(e){
    e.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value;

    //create element
    const li = document.createElement('li');
    const bookName =document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add contents  
    deleteBtn.textContent='delete';
    bookName.textContent=value;

    //add classes
    // deleteBtn.classList.add('delete');
    deleteBtn.setAttribute('class', 'delete')
    bookName.classList.add('name')

    //append book to document
    li.append(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})

//Hide Books
const hideBox = document.querySelector( '#hide')

hideBox.addEventListener('change', function(e){
    if (hideBox.checked){
        list.style.display ='none';
    }
    else{
        list.style.display ='block';
    }
    
})

//Search book
const searchBar =document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const noResult =document.querySelector('#book-list .no-result');
    const books = document.querySelectorAll('#book-list ul li');
    books.forEach(function(book){
        const title =book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) !=-1){
            book.style.display="initial";
            noResult.style.display ="none";
        }else{
            book.style.display ='none';
            noResult.style.display ="block";
        }
    })
})

//tabbed content
const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach(function(panel){
        if (panel == targetPanel){
            panel.classList.add('active')
        }else{
            panel.classList.remove('active')
        }
    })
           
        }
    }
)
