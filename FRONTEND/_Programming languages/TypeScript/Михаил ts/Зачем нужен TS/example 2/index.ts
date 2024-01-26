import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;
    console.log(todo);

    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    logTodo(id, title, finished);
});

function logTodo(id: number, title: string, completed: boolean) {
    console.log(`
        TODO ID: ${id},
        TODO TITLE: ${title},
        IS TODO finished: ${completed}
    `);

}