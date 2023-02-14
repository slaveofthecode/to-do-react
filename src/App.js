import AddNewTask from './components/addNewTask';
import TaskList from './components/taskList';
import TotalTasks from './components/totalTasks';
import SocialNetworks from './components/socialNetworks';

export default function App() {
  return (
    <>
      <header>
        <h1>
          To Do <strong>ReactJs</strong>
        </h1>
        <AddNewTask />
      </header>
      <main>
        <TaskList />
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
