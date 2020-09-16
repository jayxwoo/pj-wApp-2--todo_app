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

// todo remover
class TodoRemover {
    constructor(todoTarget) {
        this.todoTarget = todoTarget;
    }

    remove = function () {
        this.todoTarget.remove();
    }
}

// main
const main = function () {
    addTodoForm.addEventListener('submit', e => {
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

    todoGroup.addEventListener('click', e => {
        if (e.target.tagName === 'path') {
            const todoTarget = e.target.parentElement.parentElement.parentElement;
            const todoRemover = new TodoRemover(todoTarget);
            todoRemover.remove();
        } else if (e.target.tagName === 'svg') {
            const todoTarget = e.target.parentElement.parentElement;
            const todoRemover = new TodoRemover(todoTarget);
            todoRemover.remove();
        } else if (e.target.tagName === 'BUTTON') {
            const todoTarget = e.target.parentElement;
            const todoRemover = new TodoRemover(todoTarget);
            todoRemover.remove();
        };
    });
};

main();