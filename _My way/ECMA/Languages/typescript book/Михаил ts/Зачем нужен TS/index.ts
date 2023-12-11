﻿import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
    const todo = response.data;
    console.log(todo);

    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    console.log(`
        TODO ID: ${id},
        TODO TITLE: ${title},
        IS TODO finished: ${finished}
    `);
});