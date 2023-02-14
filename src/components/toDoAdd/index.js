import React from 'react';

export default function ToDoAdd() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    console.log(data);
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
