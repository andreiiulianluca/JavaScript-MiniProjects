const add = document.querySelector(".add");
const list = document.querySelector(".todos");
const generateToDo = (todo) =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center mb-1">
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
})