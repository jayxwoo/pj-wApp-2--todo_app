// ========== imports ==========
import './default.js';

// ========== script ==========
// reference
const addTodoForm = document.querySelector('.add-todo-form');

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
    constructor(addTodoText) {
        this.addTodoText = addTodoText;
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
        const addTodoDisplayer = new AddTodoDisplayer(addTodoText);
    });
};

main();