import React from 'react';

export default function ToDoAdd({ tasks, setTasks }) {
  console.log('ToDoAdd - RENDER');

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title } = Object.fromEntries(new window.FormData(event.target));

    const newTask = {
      id: tasks.length + 1,
      name: title,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Go to gym with my boyfriend'
        name='title'
      />
      <button type='submit'>Add</button>
    </form>
  );
}
