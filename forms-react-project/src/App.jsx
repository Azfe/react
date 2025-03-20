import { useState } from "react";

import NoControlado from "./components/NoControlado";
import Controlado from "./components/Controlado";
import Formulario from "./components/Formulario";
import Tasks from "./components/Tasks";

const initialStateTask = [
  {
    id: 1,
    title: 'Tarea 1',
    description: 'Descripcion tarea 1',
    priority: true,
    state: false
  },
  {
    id: 2,
    title: 'Tarea 2',
    description: 'Descripcion tarea 2',
    priority: false,
    state: true
  },
  {
    id: 3,
    title: 'Tarea 3',
    description: 'Descripcion tarea 3',
    priority: false,
    state: false
  }
];

const App = () => {

  const [tasks, setTasks] = useState(initialStateTask);

  const addTask = (task) => {
    const newTask = {
      id: tasks.length + 1,
      ...task
    }
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const updateTask = (id) => {
    const newTasks = tasks.map(task => task.id === id ? {...task, state: !task.state} : task);
    setTasks(newTasks);
  }

  return (    
    <div className="container mb-2">
      <h1 className="my-5">Formulario</h1>
      <Formulario addTask={addTask} />
      <Tasks tasks={ tasks } deleteTask={ deleteTask } updateTask={ updateTask } />
      {/* 
      <h1>Formularios</h1>
      <h2>Formulario no controlado</h2>
      <NoControlado />
      <h2>Formulario controlado</h2>
      <Controlado />
      */}
    </div>
  );
}

export default App;