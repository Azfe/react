import { useEffect, useState } from "react";

import NoControlado from "./components/NoControlado";
import Controlado from "./components/Controlado";
import Formulario from "./components/Formulario";
import Tasks from "./components/Tasks";

/*
const initialStateTasks = [
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
  },
  {
    id: 4,
    title: 'Tarea 4',
    description: 'Descripcion tarea 4',
    priority: true,
    state: false
  }
];
*/

const initialStateTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

const App = () => {

  const [tasks, setTasks] = useState(initialStateTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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

  const orderTasks = () => {
    return tasks.sort((a, b) => {
      if(a.priority === b.priority) return 0;
      if(a.priority) return -1;
      if(!a.priority) return 1;      
    });
  }

  return (    
    <div className="container mb-2">
      <h1 className="my-5">Formulario</h1>
      <Formulario addTask={addTask} />
      <Tasks 
        tasks={ orderTasks(tasks) } 
        deleteTask={ deleteTask } 
        updateTask={ updateTask } 
      />
      {/* 
      <h1>Formularios</h1>
      <h2>Formulario no controlado</h2>
      <NoControlado />
      <h2>Formulario controlado</h2>
      <Controlado />
      */}
    </div>
  );
};

export default App;