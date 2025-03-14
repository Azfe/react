import React, { use, useState } from 'react';

const Controlado = () => { 

    const [task, setTask] = useState({
        title: '',
        description: '',
        state: 'pendiente'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task.title, description, state);
    };

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title" 
                type="text" 
                placeholder="Ingrese tarea" 
                value={task.title} 
                className="form-control mb-2"
                onChange={handleChange}
            />
            <textarea 
                name="description" 
                className="form-control mb-2" 
                placeholder="Ingrese descripción" 
                value={task.description}
                onChange={handleChange}
            />
            <select 
                name="state" 
                className="form-select mb-2" 
                value={task.state}
                onChange={handleChange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Competado</option>
            </select>
            <button className="btn btn-primary" type="submit">
                Procesar
            </button>                     
        </form>        
    );
};

export default Controlado;