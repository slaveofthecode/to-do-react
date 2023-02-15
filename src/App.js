import ToDoAdd from './components/toDoAdd';
import ToDoList from './components/toDoList';
import ToDoLength from './components/toDoLength';
import SocialNetworks from './components/common/socialNetworks';
import { useTasks } from './hooks/useTasks';

export default function App() {
  const { tasks, setTasks } = useTasks();

  return (
    <>
      <header>
        <h1>
          To Do <strong>ReactJs</strong>
        </h1>
        <ToDoAdd tasks={tasks} setTasks={setTasks} />
      </header>

      <main>
        <ToDoList tasks={tasks} setTasks={setTasks} />
      </main>

      <footer>
        <ToDoLength tasks={tasks} />
        <p>
          Created by <em>gustavo lopez</em>
        </p>
        <SocialNetworks />
      </footer>
    </>
  );
}
