/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import toDoResult from '../mocks/to-do-result.json';
import { mapperTask } from '../mappers/task';

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  // here we can call an API or use a database to get the tasks
  const mappedTasks = toDoResult.map(mapperTask);

  useEffect(() => {
    setTasks(mappedTasks);
  }, []);

  return {
    tasks,
    setTasks,
  };
}
