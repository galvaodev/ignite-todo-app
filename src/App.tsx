import { useState } from 'react'

import Header from './components/Header'
import styles from "./App.module.scss";
import { TaskSubmitForm, TaskTypes } from './components/TaskSubmitForm';
import { TaskList } from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);

  return (
    <>
      <Header />
      <div className={styles.content}>
        <TaskSubmitForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  )
}

export default App
