import { useState } from "react";
import Header from "./components/Header";
import TaskComputed from "./components/TaskComputed";
import TaskCreate from "./components/TaskCreate";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

const initialStateTasks = [
  {
    id: 1,
    title: "Complete online JavaScript course",
    completed: true,
  },
  {
    id: 2,
    title: "Jog around the park 3x",
    completed: false,
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: true,
  },
  {
    id: 4,
    title: "Read for 1 hour",
    completed: false,
  },
  {
    id: 5,
    title: "Pick up groceries",
    completed: false,
  },
  {
    id: 6,
    title: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
]

const App = () => {

  const [tasks, setTasks] = useState(initialStateTasks);

  const createTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    }

    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <div className="bg-[url('./src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen">
        <Header />

        <main className="container mx-auto mt-8 px-4">
          <TaskCreate createTask={createTask}/>
          <TaskList tasks={tasks} />
          <TaskComputed />
          <TaskFilter />
        </main>

        <footer className="text-center mt-8">
          Drag and drop to reorder list
        </footer>
      </div>
    </>
  );
};

export default App;