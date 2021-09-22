const add = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchBar = document.querySelector('.search input');

const generateToDo = (todo) =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center mb-1 text-light">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;

};

add.addEventListener('submit', e =>{
    e.preventDefault();
    const contain = add.addToDo.value.trim();
    if(contain.length > 0){
        generateToDo(contain);
        add.reset();
}
});

list.addEventListener('click', e =>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterToDo = term => {

    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

};

searchBar.addEventListener('keyup', () =>{
    const term = searchBar.value.trim().toLowerCase();
    filterToDo(term);
});