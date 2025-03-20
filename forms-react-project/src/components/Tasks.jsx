import Task from "./Task";

const Tasks = ({tasks, deleteTask}) => {
  return (
    <div className="mt-4 text-center">
      <h2 className="my-4">Tareas</h2>
      <ul className="list-group">
        {tasks.map(task => (
          <Task key={task.id} task={task} deleteTask={deleteTask} />
        ))}
        {
          !tasks.length && <li className="list-group-item text-center">No hay tareas</li>
        }
      </ul>
    </div>
  );
};

export default Tasks;