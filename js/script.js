// ========== imports ==========
import './default.js';

// ========== script ==========
// reference
const addTodoForm = document.querySelector('.add-todo-form');
const todoGroup = document.querySelector('.todo-group');

// add-todo reader
class AddTodoReader {
    constructor(addTodoForm) {
        this.addTodoForm = addTodoForm;
    }

    // read add-todo
    read = function () {
        return this.addTodoForm.add.value.trim();
    }
};

// add-todo displayer
class AddTodoDisplayer {
    constructor(addTodoText, todoGroup) {
        this.addTodoText = addTodoText;
        this.todoGroup = todoGroup;
    }

    display = function () {
        this.todoGroup.innerHTML += `
            <li class="todo-item">
                <p>${this.addTodoText}</p>
                <button class="delete-btn"><i class="far fa-trash-alt delete-icon"></i></button>
            </li>
        `;
    }
}

// main
const main = function () {
    addTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // addTodoReader
        const addTodoReader = new AddTodoReader(addTodoForm);
        const addTodoText = addTodoReader.read();
        console.log(addTodoText);
        addTodoForm.reset();

        // addTodoDisplayer
        const addTodoDisplayer = new AddTodoDisplayer(addTodoText, todoGroup);
        addTodoDisplayer.display();
    });
};

main();