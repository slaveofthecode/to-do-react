import { useTasks } from '../../hooks/useTasks';

export default function ToDoList() {
  const { tasks } = useTasks();

  const DataList = ({ data }) => {
    const handleChange = ({ target }) => {
      const { id, checked } = target;
      console.log(id, checked);
      // console.log(tasks.findIndex((task) => task.id === id));
    };

    return (
      <ul>
        {data.map((task, index) => {
          return (
            <li key={index}>
              <input
                type='checkbox'
                id={task.id}
                checked={task.isCompleted}
                onChange={handleChange}
              />
              <label htmlFor={task.id}>{task.name}</label>
            </li>
          );
        })}
      </ul>
    );
  };

  const NoData = () => <p>There are no tasks to do</p>;

  return (
    <>
      <h2>Task List</h2>
      {!!tasks.length ? <DataList data={tasks} /> : <NoData />}
    </>
  );
}
