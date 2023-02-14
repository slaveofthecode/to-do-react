export function mapperTask(task) {
  return {
    id: task.id,
    name: task.title,
    isCompleted: task.completed,
  };
}
