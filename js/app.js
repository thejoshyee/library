function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}



//select form, table body, and table
const formEl = document.querySelector('form');
const tbodyEl = document.querySelector('tbody');
const tableEl = document.querySelector('table')

// add book to table
function onAddBook(e) {
  e.preventDefault();
  const author = document.getElementById('author').value; 
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').value;

  tbodyEl.innerHTML += `
    <tr>
        <td>${title}</td>
        <td>${author}</td>
        <td>${pages}</td>
        <td>${read}</td>
        <div class="wrapper">
        <td><button class="deleteBtn">X</button></td>
        </div>

    </tr>

  `;
}

// delete book from table, delete closest table row
function onDeleteRow(e) {
  if (!e.target.classList.contains('deleteBtn')) {
    return;
  }

  const btn = e.target;
  btn.closest('tr').remove();
}
formEl.addEventListener('submit', onAddBook);
tableEl.addEventListener('click', onDeleteRow);


