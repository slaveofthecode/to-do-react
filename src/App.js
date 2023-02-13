import AddNewTask from './components/addNewTask';
import TaskList from './components/taskList';
import TotalTasks from './components/totalTasks';
import SocialNetworks from './components/socialNetworks';

export default function App() {
  return (
    <>
      <header>
        <h1>To Do with ReactJs</h1>
      </header>
      <main>
        <AddNewTask />
        <TaskList />
        <TotalTasks />
      </main>
      <footer>
        <p>Created by <em>gustavo lopez</em></p>
        <SocialNetworks />
      </footer>
    </>
  );
}
