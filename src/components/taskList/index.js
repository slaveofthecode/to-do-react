import React from 'react';
import toDoResult from '../../mocks/to-do-result.json';

export default function TaskList() {
  const hasToDo = toDoResult.length > 0;

  const ToDoList = () => {
    const handleChange = () => {};

    return (
      <ul>
        {toDoResult.map((task) => {
          return (
            <li key={task.id}>
              <input
                type='checkbox'
                id={task.id}
                checked={task.completed}
                onChange={handleChange}
              />
              <label htmlFor={task.id}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    );
  };

  const NoToDo = () => {
    return <p>There are no tasks to do</p>;
  };

  return (
    <>
      <h2>Task List</h2>
      {hasToDo ? <ToDoList /> : <NoToDo />}
    </>
  );
}
