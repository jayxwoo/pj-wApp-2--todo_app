// ========== imports ==========
import './default.js';

// ========== script ==========
// reference
const addTodoForm = document.querySelector('.add-todo-form');
const todoGroup = document.querySelector('.todo-group');
const searchTodoInput = document.querySelector('.search-todo-input');

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

// todo searcher
class TodoSearcher {
    constructor(searchInputText, todoItems) {
        this.searchInputText = searchInputText;
        this.todoItems = todoItems;
    }

    // search = function () {
    //     this.todoItems.forEach((todoItem) => {
    //         console.log(todoItem.innerText.trim().toLowerCase().includes(this.searchInputText));
    //         console.log(this.searchInputText);
    //     });
    // }

    search = function () {
        const filteredNoMatch = this.todoItems.filter((todoItem) => {
            return !todoItem.innerText.trim().toLowerCase().includes(this.searchInputText);
        });
        console.log(filteredNoMatch);
    }
}

// main
const main = function () {
    // add todo
    addTodoForm.addEventListener('submit', e => {
        e.preventDefault();

        // addTodoReader
        const addTodoReader = new AddTodoReader(addTodoForm);
        const addTodoText = addTodoReader.read();
        addTodoForm.reset();

        // addTodoDisplayer
        const addTodoDisplayer = new AddTodoDisplayer(addTodoText, todoGroup);
        addTodoDisplayer.display();
    });

    // remove todo
    todoGroup.addEventListener('click', e => {
        // todoRemover
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

    // search todo
    searchTodoInput.addEventListener('keyup', () => {
        const searchTodoText = searchTodoInput.value.trim().toLowerCase();
        const todoItems = Array.from(todoGroup.children);
        
        // todoSearcher
        const todoSearcher = new TodoSearcher(searchTodoText, todoItems);
        todoSearcher.search();
    });
};

main();