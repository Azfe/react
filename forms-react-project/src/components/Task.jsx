const Task = ({ task, deleteTask, updateTask }) => {

    const { id, title, description, priority, state } = task;

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className={`${state && 'text-decoration-line-through'}`}>{title}</h5>
                    <p className={`${state && 'text-decoration-line-through'}`}>{description}</p>
                    <div className="d-flex gap-2">
                        <button onClick={() => deleteTask(id)} className="btn btn-sm btn-danger">Eliminar</button>
                        <button onClick={() => updateTask(id)} className="btn btn-sm btn-warning">Actualizar</button>
                    </div>
                </div>
                <span className="badge text-bg-primary">
                    {priority && 'Prioritario'}
                </span>
            </div>
        </li>
    )
};

export default Task;