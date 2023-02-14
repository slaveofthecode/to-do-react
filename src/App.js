import ToDoAdd from './components/toDoAdd';
import ToDoList from './components/toDoList';
import TotalTasks from './components/totalTasks';
import SocialNetworks from './components/socialNetworks';

export default function App() {
  return (
    <>
      <header>
        <h1>
          To Do <strong>ReactJs</strong>
        </h1>
        <ToDoAdd />
      </header>

      <main>
        <ToDoList />
      </main>

      <footer>
        <TotalTasks />
        <p>
          Created by <em>gustavo lopez</em>
        </p>
        <SocialNetworks />
      </footer>
    </>
  );
}
