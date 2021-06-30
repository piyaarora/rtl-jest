import React from 'react';

function Todo({ todo }) {
    const { id, title, completed } = todo;
    const h1 = <h3>todo - {title}</h3>
    const text = completed ? <strike>{h1}</strike> : h1;
    return <div data-testid={`todo-${id}`}>{text}</div>
}
export default Todo