/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

export default function ToDoLength({ tasks }) {
  console.log('ToDoLength - RENDER');
  const taskCompleted = tasks.filter((task) => task.isCompleted);
  const taskPending = tasks.filter((task) => !task.isCompleted);

  const [lengths, setLengths] = useState({
    total: tasks.length,
    completed: taskCompleted.length,
    pending: taskPending.length,
  });

  useEffect(() => {
    setLengths({
      total: tasks.length,
      completed: tasks.filter((task) => task.isCompleted).length,
      pending: tasks.filter((task) => !task.isCompleted).length,
    });
  }, [tasks]);

  return (
    <div>
      <span>
        Total <strong>{lengths.total}</strong>
      </span>
      <ul>
        <li>
          Completed <strong>{lengths.completed}</strong>
        </li>
        <li>
          Incompleted <strong>{lengths.pending}</strong>
        </li>
      </ul>
    </div>
  );
}
