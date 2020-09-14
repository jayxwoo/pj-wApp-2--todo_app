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

// todo displayer

// main
const main = function () {
    // instances
    const addTodoReader = new AddTodoReader(addTodoForm);

    addTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // addTodoReader
        const addTodoText = addTodoReader.read();
        console.log(addTodoText);

        addTodoForm.reset();
    });
};

main();