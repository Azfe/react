import Task from "./Task";

const Tasks = ({tasks}) => {
  return (
    <div className="mt-4">
      <h2 className="my-4">Tareas</h2>
      <ul className="list-group">
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;