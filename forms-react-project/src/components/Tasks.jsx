const Tasks = ({tasks}) => {
  return (
    <div className="mt-4">
      <h2 className="my-4">Tareas</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h5>{task.title}</h5>
            <p>{task.description}</p>
            <p>{task.priority ? 'Prioritaria' : 'No prioritaria'}</p>
            <p>{task.state ? 'Completada' : 'Pendiente'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;