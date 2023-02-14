import toDoResult from '../mocks/to-do-result.json';
import { mapperTask } from '../mappers/task';

export function useTasks() {
  // here we can call an API or use a database to get the tasks
  const mappedTasks = toDoResult.map(mapperTask);

  return {
    tasks: mappedTasks,
  };
}
