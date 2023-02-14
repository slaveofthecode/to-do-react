import AddNewTask from './components/addNewTask';
import TaskList from './components/taskList';
import TotalTasks from './components/totalTasks';
import SocialNetworks from './components/socialNetworks';

export default function App() {
  // const a = [
  //   'hole',
  //   'chau',
  //   'jeje',
  //   'hole',
  //   'chau',
  //   'jeje',
  //   'hole',
  //   'chau',
  //   'jeje',
  //   'hole',
  //   'chau',
  //   'jeje',
  //   'hole',
  //   'chau',
  //   'jeje',
  // ];
  const b = 'ee';

  return (
    <>
      <header>
        <h1>To Do with ReactJs {b} </h1>
      </header>
      <main>
        <AddNewTask />
        <TaskList />
        <TotalTasks />
      </main>
      <footer>
        <p>
          Created by <em>gustavo lopez</em>
        </p>
        <SocialNetworks />
      </footer>
    </>
  );
}
