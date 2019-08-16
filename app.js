const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    // template copied from html, easier when you want to just inject template
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li> 
    `;
    // adds it to html of the list
    list.innerHTML += html;

};
    // listening for submit event, getting value and trimming it
addForm.addEventListener('submit', e => {

    e.preventDefault();
    // stores the value of whats typed into add todo, trims white space before and after string
    const todo = addForm.add.value.trim();

    //if .length returns 0 then the value is false wont add a todo
    if(todo.length){
    generateTemplate(todo);
    //clear form
    addForm.reset();
    }
});

//delete todos
list.addEventListener('click', e =>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

});

//turn html collection to an array
const filterTodos = (userInput) => {
    //create array from list element
    Array.from(list.children)
    // items are only kept in the array if they dont include the userInput, use ! to do so it negates a boolean
    .filter((todo) => !todo.textContent.toLowerCase().includes(userInput))
    .forEach((todo) => todo.classList.add('filtered'));

    //when we get a match we take the class back off
    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(userInput))
    .forEach((todo) => todo.classList.remove('filtered'));
    };

// keyup event
search.addEventListener('keyup', () =>{
    const userInput = search.value.trim().toLowerCase();
    filterTodos(userInput);
});